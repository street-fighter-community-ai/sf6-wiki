import { ofetch } from 'ofetch'

/**
 * Fetch host: SuperCombo mirror (same MediaWiki + Cargo as production).
 * wiki.supercombo.gg is Cloudflare-fronted and often blocks Node clients;
 * srk.shib.live is the robots-friendly API used by projects like sf6-sensei.
 */
export const API = process.env.SF6_API_BASE || 'https://srk.shib.live/api.php'
/** Origin used to absolutize relative /images/ paths and download binaries. */
export const WIKI_ORIGIN = process.env.SF6_WIKI_ORIGIN || 'https://srk.shib.live'
/** Canonical wiki for attribution / human-facing source links. */
export const ATTRIBUTION_ORIGIN = 'https://wiki.supercombo.gg'

const UA = 'sf6-wiki-scraper/0.1 (+https://github.com/street-fighter-community-ai/sf6-wiki; educational SuperCombo scrape)'

const REQUEST_GAP_MS = Number(process.env.SF6_REQUEST_GAP_MS || 200)
let lastRequestAt = 0

async function pace() {
  const now = Date.now()
  const wait = REQUEST_GAP_MS - (now - lastRequestAt)
  if (wait > 0)
    await new Promise(r => setTimeout(r, wait))
  lastRequestAt = Date.now()
}

export function isChallengeBody(body: string): boolean {
  return /Just a moment|cf-mitigated|challenge-platform|cf-challenge|Anubis|Enable JavaScript and cookies to continue/i.test(body)
}

function assertNotChallenge(label: string, status: number, contentType: string, body: string): void {
  const head = body.slice(0, 2000)
  if (isChallengeBody(head) || (contentType.includes('text/html') && status >= 400)) {
    throw new Error(
      `Cloudflare/challenge HTML for ${label} (status=${status}, ct=${contentType}). `
      + `Use MediaWiki api.php only — never /w/ article URLs. `
      + `Default fetch host is srk.shib.live; set SF6_API_BASE / SUPERCOMBO_COOKIE if needed.`,
    )
  }
}

function cookieHeader(): string | undefined {
  return process.env.SUPERCOMBO_COOKIE || process.env.SF6_WIKI_COOKIE
}

/** Rewrite wiki.supercombo.gg → fetch mirror (same paths). */
export function toFetchUrl(url: string): string {
  try {
    const u = new URL(url)
    if (u.hostname === 'wiki.supercombo.gg') {
      u.protocol = 'https:'
      u.host = new URL(WIKI_ORIGIN).host
      return u.toString()
    }
  }
  catch {
    // keep
  }
  return url
}

/**
 * HTTP GET with identifiable User-Agent.
 * Rejects Cloudflare / challenge HTML immediately (no browser bypass loops).
 */
export async function wikiGet(url: string): Promise<{ status: number, contentType: string, body: Buffer }> {
  // Guard: never treat article pages as the scrape path
  if (/\/w\/Street_Fighter_6/i.test(url) && !/\/api\.php/i.test(url)) {
    throw new Error(`Refusing wiki article URL (use api.php action=parse): ${url}`)
  }

  const fetchUrl = toFetchUrl(url)
  await pace()

  const headers: Record<string, string> = {
    'User-Agent': UA,
    'Accept': 'application/json, application/octet-stream, image/*, */*',
  }
  const cookie = cookieHeader()
  if (cookie)
    headers.Cookie = cookie

  const res = await ofetch.raw(fetchUrl, {
    headers,
    responseType: 'arrayBuffer',
    ignoreResponseError: true,
    retry: 0,
    timeout: 60_000,
  })

  const body = Buffer.from(res._data as ArrayBuffer)
  const contentType = String(res.headers.get('content-type') || '')
  const textProbe = body.toString('utf8', 0, Math.min(body.length, 4000))

  assertNotChallenge(fetchUrl, res.status, contentType, textProbe)

  return { status: res.status, contentType, body }
}

export interface ParseResult {
  title: string
  pageid: number
  html: string
  sections: Array<{
    toclevel: number
    level: string
    line: string
    number: string
    index: string
    fromtitle: string
    byteoffset: number | null
    anchor: string
  }>
}

export function cacheKey(page: string): string {
  return page.replace(/[^\w.-]+/g, '_')
}

/** Canonical MediaWiki parse URL (action=parse only). */
export function parseApiUrl(page: string): string {
  const url = new URL(API)
  url.searchParams.set('action', 'parse')
  url.searchParams.set('page', page)
  url.searchParams.set('prop', 'text|sections')
  url.searchParams.set('redirects', '1')
  url.searchParams.set('format', 'json')
  url.searchParams.set('disablelimitreport', '1')
  return url.toString()
}

async function readParseCache(page: string): Promise<ParseResult | null> {
  try {
    const { readFile } = await import('node:fs/promises')
    const { resolve } = await import('node:path')
    const { fileURLToPath } = await import('node:url')
    const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '../../.cache/wiki')
    const key = cacheKey(page)
    const candidates = [
      `${key}.html`,
      page === 'Street Fighter 6' ? 'hub.html' : '',
      /\/Ryu$/i.test(page) ? 'ryu_moves.html' : '',
      /\/Ryu\/Introduction$/i.test(page) ? 'ryu_intro.html' : '',
      /\/Ryu\/Frame data$/i.test(page) ? 'ryu_framedata.html' : '',
      /\/Ryu\/Combos$/i.test(page) ? 'ryu_combos.html' : '',
      /\/Ryu\/Strategy$/i.test(page) ? 'ryu_strategy.html' : '',
      /\/Ryu\/Matchups$/i.test(page) ? 'ryu_matchups.html' : '',
      /\/Ryu\/Resources$/i.test(page) ? 'ryu_resources.html' : '',
    ].filter(Boolean)

    for (const file of candidates) {
      try {
        const html = await readFile(resolve(root, file), 'utf8')
        if (html.length > 100 && !isChallengeBody(html.slice(0, 500))) {
          return { title: page, pageid: 0, html, sections: [] }
        }
      }
      catch {
        // next
      }
    }
  }
  catch {
    // no cache dir
  }
  return null
}

function parseApiJson(page: string, text: string): ParseResult {
  const json = JSON.parse(text) as {
    error?: { info?: string, code?: string }
    parse?: {
      title: string
      pageid: number
      text: { '*': string }
      sections?: ParseResult['sections']
    }
  }

  if (json.error)
    throw new Error(`MediaWiki error for "${page}": ${json.error.info || json.error.code || 'unknown'}`)
  if (!json.parse?.text?.['*'])
    throw new Error(`Empty parse.text["*"] for "${page}"`)

  const html = json.parse.text['*']
  if (isChallengeBody(html.slice(0, 500)))
    throw new Error(`parse.text for "${page}" looks like a challenge page — wrong fetch path`)

  return {
    title: json.parse.title,
    pageid: json.parse.pageid,
    html,
    sections: json.parse.sections || [],
  }
}

/**
 * Fetch a wiki page via api.php?action=parse and return rendered HTML (parse.text["*"]).
 * Never requests /w/ article URLs.
 */
export async function parsePage(page: string): Promise<ParseResult> {
  // Prefer warm API dumps when SF6_CACHE_FIRST=1 (avoids CF noise on blocked networks)
  if (process.env.SF6_CACHE_FIRST === '1') {
    const cached = await readParseCache(page)
    if (cached) {
      console.log(`  cache hit: "${page}"`)
      return cached
    }
  }

  const apiUrl = parseApiUrl(page)

  try {
    const { status, contentType, body } = await wikiGet(apiUrl)
    const text = body.toString('utf8')

    if (status !== 200)
      throw new Error(`HTTP ${status} from api.php for "${page}"`)
    if (!contentType.includes('json') && !text.trimStart().startsWith('{'))
      throw new Error(`Non-JSON api.php response for "${page}" (ct=${contentType})`)

    return parseApiJson(page, text)
  }
  catch (err) {
    // Offline / CF-challenged network: reuse prior API dumps under .cache/wiki
    const cached = await readParseCache(page)
    if (cached) {
      console.warn(`  api.php unavailable (${err instanceof Error ? err.message.split('\n')[0] : err}); using API cache for "${page}"`)
      return cached
    }
    throw err
  }
}

export function absolutizeWikiUrl(src: string): string {
  if (!src)
    return src
  if (src.startsWith('//'))
    return `https:${src}`
  if (src.startsWith('/'))
    return `${WIKI_ORIGIN}${src}`
  return src
}

/** Prefer original file URL over MediaWiki thumbnails; normalize host to fetch mirror. */
export function preferOriginalImageUrl(src: string): string {
  const abs = toFetchUrl(absolutizeWikiUrl(src))
  try {
    const u = new URL(abs)
    const m = u.pathname.match(/^\/images\/thumb\/(.+?)\/\d+px-[^/]+$/)
    if (m) {
      u.pathname = `/images/${m[1]}`
      return u.toString()
    }
  }
  catch {
    // keep abs
  }
  return abs
}

/** Path-only key so the same image from either host shares one map entry. */
export function imagePathKey(url: string): string {
  try {
    return new URL(preferOriginalImageUrl(url)).pathname
  }
  catch {
    return url
  }
}
