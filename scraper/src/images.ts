import { createHash } from 'node:crypto'
import { access, mkdir, writeFile } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import * as cheerio from 'cheerio'
import pLimit from 'p-limit'
import {
  absolutizeWikiUrl,
  imagePathKey,
  isChallengeBody,
  preferOriginalImageUrl,
  WIKI_ORIGIN,
  wikiGet,
} from './mediawiki.js'

const limit = pLimit(Number(process.env.SF6_IMAGE_CONCURRENCY || 4))

const IMAGE_HOSTS = new Set(['wiki.supercombo.gg', 'srk.shib.live'])

export interface DownloadResult {
  remote: string
  localPath: string
  publicPath: string
  ok: boolean
  error?: string
}

function safeFilename(url: string): string {
  try {
    const u = new URL(url)
    let name = basename(u.pathname)
    name = decodeURIComponent(name).replace(/[^\w.-]+/g, '_')
    if (!extname(name))
      name += '.png'
    if (name.length > 120) {
      const hash = createHash('sha1').update(url).digest('hex').slice(0, 10)
      name = `${hash}${extname(name) || '.png'}`
    }
    return name
  }
  catch {
    return `${createHash('sha1').update(url).digest('hex')}.bin`
  }
}

export function isDownloadableImageUrl(url: string): boolean {
  try {
    const u = new URL(preferOriginalImageUrl(url))
    if (!IMAGE_HOSTS.has(u.hostname))
      return false
    if (!u.pathname.startsWith('/images/'))
      return false
    if (u.pathname.includes('/w/'))
      return false
    const name = u.pathname.toLowerCase()
    if (process.env.SF6_INCLUDE_HITBOXES !== '1') {
      if (name.includes('hitbox') || name.includes('_preview'))
        return false
    }
    return true
  }
  catch {
    return false
  }
}

/**
 * Point every wiki image URL at the fetch mirror (full-size, no download).
 * Default scrape path — browser loads from srk.shib.live directly.
 */
export function rewriteImagesToMirror(md: string): string {
  return md.replace(
    /(?:https?:\/\/(?:wiki\.supercombo\.gg|srk\.shib\.live))?\/images\/[^\s)"']+/g,
    (url) => {
      const clean = url.replace(/[),.;]+$/, '')
      return preferOriginalImageUrl(clean.startsWith('http') ? clean : clean)
    },
  ).replace(
    /https?:\/\/wiki\.supercombo\.gg\/images\/[^\s)"']+/g,
    url => preferOriginalImageUrl(url.replace(/[),.;]+$/, '')),
  )
}

function remember(map: Map<string, string>, remote: string, publicPath: string) {
  map.set(remote, publicPath)
  map.set(preferOriginalImageUrl(remote), publicPath)
  map.set(imagePathKey(remote), publicPath)
  try {
    const u = new URL(preferOriginalImageUrl(remote))
    u.host = 'wiki.supercombo.gg'
    map.set(u.toString(), publicPath)
    u.host = 'srk.shib.live'
    map.set(u.toString(), publicPath)
  }
  catch {
    // ignore
  }
}

/**
 * Optional local download (SF6_DOWNLOAD_IMAGES=1). Soft-fail per image.
 */
export async function downloadImages(
  urls: Iterable<string>,
  opts: { slug: string, docsPublicRoot: string },
): Promise<Map<string, string>> {
  const dir = join(opts.docsPublicRoot, 'characters', opts.slug)
  await mkdir(dir, { recursive: true })

  const unique = [...new Set(
    [...urls]
      .filter(Boolean)
      .map(preferOriginalImageUrl)
      .filter(isDownloadableImageUrl),
  )]
  const map = new Map<string, string>()

  const results = await Promise.all(unique.map(remote => limit(async (): Promise<DownloadResult> => {
    const file = safeFilename(remote)
    const localPath = join(dir, file)
    const publicPath = `/characters/${opts.slug}/${file}`
    try {
      try {
        await access(localPath)
        return { remote, localPath, publicPath, ok: true }
      }
      catch {
        // download
      }

      const { status, body, contentType } = await wikiGet(remote)
      const probe = body.toString('utf8', 0, Math.min(body.length, 400))
      if (status >= 400 || contentType.includes('text/html') || isChallengeBody(probe)) {
        return { remote, localPath, publicPath, ok: false, error: `HTTP ${status} ${contentType}` }
      }
      await writeFile(localPath, body)
      return { remote, localPath, publicPath, ok: true }
    }
    catch (err) {
      return { remote, localPath, publicPath, ok: false, error: String(err) }
    }
  })))

  let ok = 0
  let fail = 0
  for (const r of results) {
    if (r.ok) {
      remember(map, r.remote, r.publicPath)
      ok++
    }
    else {
      fail++
      console.warn(`  image fail: ${r.remote} — ${r.error}`)
    }
  }
  console.log(`  images downloaded: ${ok} ok, ${fail} failed (${unique.length} unique) → ${WIKI_ORIGIN}`)
  return map
}

export function rewriteMarkdownImages(md: string, imageMap: Map<string, string>): string {
  let out = rewriteImagesToMirror(md)
  if (imageMap.size === 0)
    return out

  return out.replace(
    /https?:\/\/(?:wiki\.supercombo\.gg|srk\.shib\.live)\/images\/[^\s)"']+/g,
    (url) => {
      const clean = url.replace(/[),.;]+$/, '')
      const preferred = preferOriginalImageUrl(clean)
      return imageMap.get(preferred)
        || imageMap.get(clean)
        || imageMap.get(imagePathKey(clean))
        || preferred
    },
  )
}

export function collectUrlsFromMarkdown(md: string): string[] {
  const urls: string[] = []
  const re = /https?:\/\/(?:wiki\.supercombo\.gg|srk\.shib\.live)\/images\/[^\s)"']+/g
  for (const match of md.matchAll(re))
    urls.push(match[0].replace(/[),.;]+$/, ''))
  return urls
}

/**
 * Collect image URLs from MediaWiki parse HTML (img src/srcset + File: anchors with nested img).
 */
export function collectImagesFromHtml(html: string): string[] {
  const $ = cheerio.load(html)
  const urls = new Set<string>()

  const add = (raw: string | undefined) => {
    if (!raw)
      return
    const preferred = preferOriginalImageUrl(absolutizeWikiUrl(raw.trim()))
    if (isDownloadableImageUrl(preferred))
      urls.add(preferred)
  }

  $('img').each((_, el) => {
    add($(el).attr('src'))
    const srcset = $(el).attr('srcset')
    if (srcset) {
      for (const part of srcset.split(',')) {
        const u = part.trim().split(/\s+/)[0]
        add(u)
      }
    }
  })

  $('a[href*="/File:"], a[href*="File:"]').each((_, el) => {
    const href = $(el).attr('href') || ''
    if (/\/w\/Street_Fighter_6\//i.test(href))
      return
    add($(el).find('img').attr('src'))
    const nextImg = $(el).parent().find('img').first().attr('src')
    add(nextImg)
  })

  return [...urls]
}
