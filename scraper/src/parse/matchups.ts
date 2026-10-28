import type { Element } from 'domhandler'
import type { MatchupEntry, MatchupsData } from '../types.js'
import * as cheerio from 'cheerio'
import { absolutizeWikiUrl } from '../mediawiki.js'
import { cleanText, tableToMarkdown } from './html.js'

export function parseMatchups(html: string): MatchupsData {
  const $ = cheerio.load(html)
  $('style, script, .mw-editsection, link').remove()

  const matchups: MatchupEntry[] = []

  $('.mw-heading').each((_, wrap) => {
    const heading = $(wrap).children('h2').first()
    if (!heading.length)
      return

    // Name may be in a visibility:hidden font inside h2
    let opponent = cleanText(heading.find('font').first().text() || heading.text())
    let opponentIconSrc: string | undefined
    let favorability: string | undefined

    // Icon + "Ryu vs. X (50%)" live in the next paragraph, not the heading
    let probe = wrap.nextSibling
    while (probe && probe.type !== 'tag')
      probe = probe.nextSibling
    if (probe && (probe as Element).tagName === 'p') {
      const $p = $(probe)
      const icon = $p.find('span.sc-char-icon').first()
      if (icon.length) {
        const a = icon.find('a').first()
        const title = (a.attr('title') || '').replace(/^Street Fighter 6\//, '')
        const href = a.attr('href') || ''
        const fromHref = decodeURIComponent((href.match(/Street_Fighter_6\/([^/?#]+)/) || [])[1] || '').replace(/_/g, ' ')
        opponent = cleanText(title || fromHref || opponent)
        const img = icon.find('img.mw-file-element').attr('src')
        if (img)
          opponentIconSrc = absolutizeWikiUrl(img)
      }
      const pct = cleanText($p.text()).match(/\(([^)]+%)\)/)
      if (pct)
        favorability = pct[1]
    }

    if (!opponent || /overview|introduction|general|contents/i.test(opponent))
      return

    const entry: MatchupEntry = {
      opponent,
      opponentIconSrc,
      favorability,
      paragraphs: [],
      tables: [],
      subsections: [],
    }

    let currentSub: MatchupEntry['subsections'][number] | null = null
    let sib = wrap.nextSibling
    while (sib) {
      if (sib.type === 'tag') {
        const el = sib as Element
        if (el.tagName === 'div' && $(el).hasClass('mw-heading')) {
          if ($(el).children('h2').length)
            break
          const h4 = $(el).children('h3, h4').first()
          if (h4.length) {
            currentSub = {
              title: cleanText(h4.text()),
              paragraphs: [],
              tables: [],
            }
            entry.subsections.push(currentSub)
          }
        }
        else if (/^h2$/i.test(el.tagName)) {
          break
        }
        else if (el.tagName === 'p') {
          const t = cleanText($(el).text())
          // Skip the header line we already used for favorability
          const isHeaderLine = Boolean(t) && /vs\./i.test(t) && t.length < 80
          if (!t || isHeaderLine) {
            // skip
          }
          else if (currentSub) {
            currentSub.paragraphs.push(t)
          }
          else {
            entry.paragraphs.push(t)
          }
        }
        else if (el.tagName === 'table' || $(el).find('table.wikitable').length) {
          const tables = el.tagName === 'table' ? [el] : $(el).find('table.wikitable').toArray()
          for (const table of tables) {
            const md = tableToMarkdown($, $(table))
            if (!md)
              continue
            if (currentSub)
              currentSub.tables.push(md)
            else
              entry.tables.push(md)
          }
        }
      }
      sib = sib.nextSibling
    }

    if (entry.paragraphs.length || entry.tables.length || entry.subsections.length || entry.opponentIconSrc)
      matchups.push(entry)
  })

  return { matchups }
}
