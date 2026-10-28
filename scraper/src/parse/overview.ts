import type { OverviewData } from '../types.js'
import * as cheerio from 'cheerio'
import { cleanText, tableToMarkdown } from './html.js'

export function parseOverview(html: string): OverviewData {
  const $ = cheerio.load(html)
  $('style, script, .mw-editsection, link[rel="mw-deduplicated-inline-style"]').remove()

  const paragraphs: string[] = []
  $('.mw-parser-output > p, body > p').each((_, p) => {
    const t = cleanText($(p).text())
    if (t)
      paragraphs.push(t)
  })
  // Fallback: any p
  if (paragraphs.length === 0) {
    $('p').each((_, p) => {
      const t = cleanText($(p).text())
      if (t)
        paragraphs.push(t)
    })
  }

  let pickAvoidHtml: string | undefined
  const pickTable = $('table.rounded-table').first()
  if (pickTable.length) {
    const left: string[] = []
    const right: string[] = []
    pickTable.find('tr').eq(1).find('td').eq(0).find('li').each((_, li) => {
      left.push(`- ${cleanText($(li).text())}`)
    })
    pickTable.find('tr').eq(1).find('td').eq(1).find('li').each((_, li) => {
      right.push(`- ${cleanText($(li).text())}`)
    })
    pickAvoidHtml = [
      '### Pick if you like',
      ...left,
      '',
      '### Avoid if you dislike',
      ...right,
    ].join('\n')
  }

  const comparisonTables = []
  for (const table of $('table.wikitable, table.rounded-table').toArray()) {
    if (pickTable.length && table === pickTable.get(0))
      continue
    const md = tableToMarkdown($, $(table))
    if (md && md.rows.length)
      comparisonTables.push(md)
  }

  return {
    paragraphs,
    pickAvoidHtml,
    comparisonTables,
    extraHtml: '',
  }
}
