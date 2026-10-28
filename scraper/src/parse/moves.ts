import type { Cheerio, CheerioAPI } from 'cheerio'
import type { Element } from 'domhandler'
import type { MoveEntry, MoveImage, MovesData } from '../types.js'
import * as cheerio from 'cheerio'
import { absolutizeWikiUrl } from '../mediawiki.js'
import { cleanText, tableToMarkdown } from './html.js'

function extractInputs($: CheerioAPI, container: Cheerio<Element>): { classic?: string, modern?: string } {
  let classic: string | undefined
  let modern: string | undefined

  const info = container.find('.movedata-flex-image-container > div').first()
  if (info.length) {
    const html = info.html() || ''
    const classicMatch = html.match(/SF6_Classic\.png[\s\S]*?<\/span><\/span>\s*([^<]+)/i)
    const modernMatch = html.match(/SF6_Modern\.png[\s\S]*?<\/span><\/span>\s*([^<]+)/i)
    if (classicMatch)
      classic = cleanText(classicMatch[1])
    if (modernMatch)
      modern = cleanText(modernMatch[1])
  }

  return { classic, modern }
}

function collectImages($: CheerioAPI, container: Cheerio<Element>): MoveImage[] {
  const images: MoveImage[] = []
  container.find('.movedata-flex-images .move-image img.mw-file-element, .movedatacargoimage-img img.mw-file-element').each((_, img) => {
    const src = $(img).attr('src')
    if (!src)
      return
    // Prefer move-image branch only for "move" — skip if already under hitbox
    if ($(img).closest('.hitbox-image').length)
      return
    images.push({
      src: absolutizeWikiUrl(src),
      alt: $(img).attr('alt') || undefined,
      kind: 'move',
    })
  })
  container.find('.hitbox-image img.mw-file-element').each((_, img) => {
    const src = $(img).attr('src')
    if (!src)
      return
    images.push({
      src: absolutizeWikiUrl(src),
      alt: $(img).attr('alt') || undefined,
      kind: 'hitbox',
    })
  })
  return images
}

function extractNotesAndDescription($: CheerioAPI, container: Cheerio<Element>): { notes: string[], description?: string } {
  const info = container.find('.movedata-flex-information').first()
  if (!info.length)
    return { notes: [] }

  const notes: string[] = []
  info.find('ul > li').each((_, li) => {
    // One bullet per <li>; collapse internal newlines from nested wiki markup
    const t = cleanText($(li).text().replace(/\s*\n+\s*/g, ' '))
    if (t)
      notes.push(t)
  })

  const paragraphs: string[] = []
  info.children('p').each((_, p) => {
    if ($(p).hasClass('mw-empty-elt'))
      return
    const t = cleanText($(p).text())
    if (t)
      paragraphs.push(t)
  })

  return {
    notes,
    description: paragraphs.length ? paragraphs.join('\n\n') : undefined,
  }
}

function parseMoveContainer($: CheerioAPI, container: Cheerio<Element>, fallbackName: string, fallbackId: string): MoveEntry {
  const displayName = cleanText(container.find('.movedata-flex-image-container big').first().text())
    || cleanText(container.find('.movedata-flex-framedata-name-item').eq(1).text())
    || undefined

  const notation = cleanText(container.find('.movedata-flex-framedata-name-item').first().text())
    || fallbackName

  const inputs = extractInputs($, container)
  const images = collectImages($, container)
  const frameTableEl = container.find('.movedata-flex-framedata-table table, .movedata-flex-information table').first()
  const frameTable = frameTableEl.length ? tableToMarkdown($, frameTableEl) || undefined : undefined
  const { notes, description } = extractNotesAndDescription($, container)

  return {
    id: fallbackId || notation.replace(/\s+/g, '_'),
    name: notation || fallbackName,
    displayName,
    classicInput: inputs.classic,
    modernInput: inputs.modern,
    images,
    frameTable: frameTable || undefined,
    notes,
    description,
  }
}

export function parseMoves(html: string): MovesData {
  const $ = cheerio.load(html)
  $('style, script, .mw-editsection, link').remove()

  let portraitSrc: string | undefined
  $('img.mw-file-element').each((_, img) => {
    const src = $(img).attr('src') || ''
    if (/Portrait\.png/i.test(src)) {
      portraitSrc = absolutizeWikiUrl(src)
      return false
    }
  })

  const sections: MovesData['sections'] = []

  $('.mw-heading').each((_, wrap) => {
    const heading = $(wrap).children('h2, h3').first()
    if (!heading.length)
      return
    const id = heading.attr('id') || cleanText(heading.text())
    const title = cleanText(heading.text())
    const level = heading.get(0)?.tagName.toLowerCase() === 'h2' ? 2 : 3

    const moves: MoveEntry[] = []
    const prose: string[] = []
    let sib = wrap.nextSibling
    while (sib) {
      if (sib.type === 'tag') {
        const el = sib as Element
        if (el.tagName === 'div' && $(el).hasClass('mw-heading')) {
          const nextH = $(el).children('h2, h3').get(0)
          if (nextH) {
            const nextLevel = nextH.tagName.toLowerCase() === 'h2' ? 2 : 3
            if (nextLevel <= level)
              break
          }
        }
        if (/^h[12]$/i.test(el.tagName))
          break

        if (el.tagName === 'p') {
          const t = cleanText($(el).text())
          if (t)
            prose.push(t)
        }

        if (el.tagName === 'div' && $(el).hasClass('mw-heading') && $(el).children('h5').length) {
          const h5 = $(el).children('h5').first()
          const moveId = h5.attr('id') || cleanText(h5.text())
          const name = cleanText(h5.text())
          let node = el.nextSibling
          let container: Cheerio<Element> | null = null
          while (node) {
            if (node.type === 'tag') {
              const tag = node as Element
              if ($(tag).hasClass('movedata-container')) {
                container = $(tag)
                break
              }
              if ($(tag).find('.movedata-container').length) {
                container = $(tag).find('.movedata-container').first()
                break
              }
              if (tag.tagName === 'div' && $(tag).hasClass('mw-heading'))
                break
            }
            node = node.nextSibling
          }
          if (container)
            moves.push(parseMoveContainer($, container, name, moveId))
          else
            moves.push({ id: moveId, name, images: [], notes: [] })
        }
      }
      sib = sib.nextSibling
    }

    if (moves.length || prose.length)
      sections.push({ id, title, moves, prose })
  })

  if (sections.every(s => s.moves.length === 0)) {
    const moves: MoveEntry[] = []
    $('.movedata-container').each((_, el) => {
      const name = cleanText($(el).find('big').first().text()) || 'Move'
      moves.push(parseMoveContainer($, $(el), name, name.replace(/\s+/g, '_')))
    })
    if (moves.length)
      sections.push({ id: 'Moves', title: 'Moves', moves, prose: [] })
  }

  return { sections, portraitSrc }
}
