import type { Element } from 'domhandler'
import type { ResourcesData } from '../types.js'
import * as cheerio from 'cheerio'
import { absolutizeWikiUrl } from '../mediawiki.js'
import { cleanText, tableToMarkdown } from './html.js'

export function parseResources(html: string): ResourcesData {
  const $ = cheerio.load(html)
  $('style, script, .mw-editsection, link').remove()

  const sections: ResourcesData['sections'] = []

  $('.mw-heading').each((_, wrap) => {
    const heading = $(wrap).children('h2, h3').first()
    if (!heading.length)
      return
    const level = heading.get(0)!.tagName.toLowerCase() === 'h2' ? 2 : 3
    const id = heading.attr('id') || cleanText(heading.text())
    const title = cleanText(heading.text())

    const paragraphs: string[] = []
    const links: Array<{ text: string, href: string }> = []
    const tables = []

    let sib = wrap.nextSibling
    while (sib) {
      if (sib.type === 'tag') {
        const el = sib as Element
        if (el.tagName === 'div' && $(el).hasClass('mw-heading')) {
          const next = $(el).children('h2,h3').get(0)
          if (next) {
            const nextLevel = next.tagName.toLowerCase() === 'h2' ? 2 : 3
            if (nextLevel <= level)
              break
          }
        }
        if (/^h[12]$/i.test(el.tagName))
          break

        if (el.tagName === 'p') {
          const t = cleanText($(el).text())
          if (t)
            paragraphs.push(t)
        }
        $(el).find('a[href]').addBack('a[href]').each((__, a) => {
          const href = $(a).attr('href')
          const text = cleanText($(a).text())
          if (!href || !text)
            return
          if (href.startsWith('#') || href.includes('action=edit'))
            return
          links.push({
            text,
            href: href.startsWith('http') ? href : absolutizeWikiUrl(href),
          })
        })
        if (el.tagName === 'table') {
          const md = tableToMarkdown($, $(el))
          if (md)
            tables.push(md)
        }
        $(el).find('table.wikitable').each((__, table) => {
          const md = tableToMarkdown($, $(table))
          if (md)
            tables.push(md)
        })
      }
      sib = sib.nextSibling
    }

    // Dedupe links
    const seen = new Set<string>()
    const uniqueLinks = links.filter((l) => {
      const key = `${l.href}|${l.text}`
      if (seen.has(key))
        return false
      seen.add(key)
      return true
    })

    if (paragraphs.length || uniqueLinks.length || tables.length)
      sections.push({ id, title, paragraphs, links: uniqueLinks, tables })
  })

  return { sections }
}
