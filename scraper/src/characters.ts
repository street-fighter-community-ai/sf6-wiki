import type { CharacterRef } from './types.js'
import * as cheerio from 'cheerio'
import { parsePage } from './mediawiki.js'

const SKIP = new Set([
  'Controls',
  'HUD',
  'Gauges',
  'Offense',
  'Defense',
  'Movement',
  'Game_Data',
  'Game Data',
  'Glossary',
  'FAQ',
  'Patch_Notes',
  'Patch Notes',
  'Links',
  'Introduction',
  'Combos',
  'Strategy',
  'Matchups',
  'Frame_data',
  'Frame data',
  'Resources',
  'Data',
])

/** Normalize MediaWiki title segment to the canonical API page name. */
export function normalizePageName(raw: string): string {
  let name = decodeURIComponent(raw).replace(/_/g, ' ').trim()
  // C. Viper / E. Honda / M. Bison → C.Viper / E.Honda / M.Bison (API titles)
  name = name.replace(/^([A-Z])\.\s+(?=[A-Za-z])/g, '$1.')
  return name
}

export function slugify(pageName: string): string {
  return normalizePageName(pageName)
    .trim()
    .toLowerCase()
    .replace(/([a-z0-9])\.\s+/g, '$1.')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9.-]+/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.+|\.+$/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function displayNameFromPage(pageName: string): string {
  const n = normalizePageName(pageName)
  if (/^[A-Z]\.[A-Z]/.test(n) && !n.includes(' '))
    return n.replace(/^([A-Z]\.)([A-Za-z])/, '$1 $2')
  return n
}

export function characterPages(pageName: string) {
  const base = `Street Fighter 6/${normalizePageName(pageName)}`
  return {
    moves: base,
    overview: `${base}/Introduction`,
    frameData: `${base}/Frame data`,
    combos: `${base}/Combos`,
    strategy: `${base}/Strategy`,
    matchups: `${base}/Matchups`,
    resources: `${base}/Resources`,
  }
}

/** Parse hub HTML (from api.php action=parse) for character roster links. */
export function parseHubCharacters(html: string): CharacterRef[] {
  const $ = cheerio.load(html)
  const bySlug = new Map<string, CharacterRef>()

  $('a[href*="/w/Street_Fighter_6/"]').each((_, el) => {
    const href = $(el).attr('href') || ''
    const m = href.match(/\/w\/Street_Fighter_6\/([^?#]+)/)
    if (!m)
      return
    const segment = decodeURIComponent(m[1])
    if (segment.includes('/'))
      return

    const pageName = normalizePageName(segment)
    if (SKIP.has(pageName) || SKIP.has(segment) || SKIP.has(segment.replace(/_/g, ' ')))
      return

    const slug = slugify(pageName)
    if (bySlug.has(slug))
      return

    const name = ($(el).text() || '').trim() || displayNameFromPage(pageName)
    bySlug.set(slug, { name, pageName, slug })
  })

  return [...bySlug.values()].sort((a, b) => a.name.localeCompare(b.name))
}

export async function listCharactersFromHub(): Promise<CharacterRef[]> {
  const hub = await parsePage('Street Fighter 6')
  const chars = parseHubCharacters(hub.html)
  if (chars.length < 10) {
    throw new Error(`Hub character list too small (${chars.length}); check api.php parse of "Street Fighter 6"`)
  }
  return chars
}

export function findCharacter(chars: CharacterRef[], query: string): CharacterRef | undefined {
  const q = query.trim().toLowerCase()
  return chars.find(c =>
    c.slug === q
    || c.pageName.toLowerCase() === q
    || normalizePageName(c.pageName).toLowerCase() === normalizePageName(query).toLowerCase()
    || c.name.toLowerCase() === q
    || slugify(c.name) === q
    || slugify(query) === c.slug,
  )
}
