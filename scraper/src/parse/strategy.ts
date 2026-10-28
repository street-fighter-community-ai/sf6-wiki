import type { Element } from 'domhandler'
import type { StrategyData } from '../types.js'
import * as cheerio from 'cheerio'
import { cleanText, paragraphTexts, tableToMarkdown } from './html.js'

export function parseStrategy(html: string): StrategyData {
  const $ = cheerio.load(html)
  $('style, script, .mw-editsection, link').remove()

  const sections: StrategyData['sections'] = []

  $('.mw-heading').each((_, wrap) => {
    const heading = $(wrap).children('h2, h3, h4').first()
    if (!heading.length)
      return
    const tag = heading.get(0)!.tagName.toLowerCase()
    const level = Number(tag.replace('h', '')) || 2
    const id = heading.attr('id') || cleanText(heading.text())
    const title = cleanText(heading.text())

    const paragraphs: string[] = []
    const tables = []
    let sib = wrap.nextSibling
    while (sib) {
      if (sib.type === 'tag') {
        const el = sib as Element
        if (el.tagName === 'div' && $(el).hasClass('mw-heading')) {
          const next = $(el).children('h2,h3,h4').get(0)
          if (next) {
            const nextLevel = Number(next.tagName.replace(/\D/g, ''))
            if (nextLevel <= level)
              break
          }
        }
        if (/^h[1-4]$/i.test(el.tagName)) {
          const nextLevel = Number(el.tagName.replace(/\D/g, ''))
          if (nextLevel <= level)
            break
        }
        if (el.tagName === 'p') {
          const t = cleanText($(el).text())
          if (t)
            paragraphs.push(t)
        }
        if (el.tagName === 'table' || $(el).is('table.wikitable, table.sf6-combotable')) {
          const md = tableToMarkdown($, $(el).is('table') ? $(el) : $(el).find('table').first())
          if (md)
            tables.push(md)
        }
        $(el).find('> table.wikitable, > table.sf6-combotable').each((__, table) => {
          const md = tableToMarkdown($, $(table))
          if (md)
            tables.push(md)
        })
      }
      sib = sib.nextSibling
    }

    if (paragraphs.length || tables.length)
      sections.push({ id, title, level, paragraphs, tables })
  })

  if (!sections.length) {
    sections.push({
      id: 'Strategy',
      title: 'Strategy',
      level: 2,
      paragraphs: paragraphTexts($, $.root()),
      tables: [],
    })
  }

  return { sections }
}
