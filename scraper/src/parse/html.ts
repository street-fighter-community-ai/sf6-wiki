import type { Cheerio, CheerioAPI } from 'cheerio'
import type { AnyNode, Element } from 'domhandler'
import type { MarkdownTable } from '../types.js'

/** Strip wiki chrome / edit buttons and normalize text. */
export function cleanText(input: string): string {
  return input
    .replace(/\u00A0/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
}

export function cellText($: CheerioAPI, el: AnyNode | null): string {
  if (!el)
    return ''
  const clone = $(el).clone()
  clone.find('style, script, .mw-editsection, link').remove()
  clone.find('br').replaceWith(' / ')
  return cleanText(clone.text())
}

export function tableToMarkdown($: CheerioAPI, table: Cheerio<Element>): MarkdownTable | null {
  const rows: string[][] = []
  table.find('tr').each((_, tr) => {
    const cells: string[] = []
    $(tr).children('th, td').each((__, cell) => {
      cells.push(escapeMdCell(cellText($, cell)))
    })
    if (cells.some(c => c.length > 0))
      rows.push(cells)
  })
  if (rows.length === 0)
    return null

  // Heuristic: first row is header if it came from th-only or first row has th
  const firstHasTh = table.find('tr').first().children('th').length > 0
  let headers: string[]
  let body: string[][]
  if (firstHasTh) {
    headers = rows[0]
    body = rows.slice(1)
  }
  else {
    const width = Math.max(...rows.map(r => r.length))
    headers = Array.from({ length: width }, (_, i) => `Col ${i + 1}`)
    body = rows
  }

  const width = headers.length
  const normalized = body.map((r) => {
    const copy = r.slice(0, width)
    while (copy.length < width) copy.push('')
    return copy
  })

  const caption = cleanText(table.find('caption').first().text()) || undefined
  return { headers, rows: normalized, caption }
}

/** Neutralize sequences that VitePress/Vue would parse as HTML or mustache. */
export function escapeVueMd(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{\{/g, '&#123;&#123;')
    .replace(/\}\}/g, '&#125;&#125;')
}

export function escapeMdCell(text: string): string {
  return escapeVueMd(text.replace(/\|/g, '\\|').replace(/\n+/g, ' ')).trim()
}

/** Escape angle brackets / mustache in free-form markdown prose. */
export function escapeMdProse(text: string): string {
  return escapeVueMd(text)
}

export function renderMarkdownTable(table: MarkdownTable): string {
  const lines: string[] = []
  if (table.caption)
    lines.push(`*${table.caption}*`, '')
  lines.push(`| ${table.headers.join(' | ')} |`)
  lines.push(`| ${table.headers.map(() => '---').join(' | ')} |`)
  for (const row of table.rows)
    lines.push(`| ${row.join(' | ')} |`)
  return lines.join('\n')
}

export function paragraphTexts($: CheerioAPI, root: Cheerio<AnyNode>): string[] {
  const out: string[] = []
  root.find('p').each((_, p) => {
    const t = cleanText($(p).text())
    if (t)
      out.push(t)
  })
  return out
}

export function htmlToPlainMarkdownish($: CheerioAPI, el: Cheerio<AnyNode>): string {
  const clone = el.clone()
  clone.find('style, script, .mw-editsection, link').remove()
  clone.find('br').replaceWith('\n')
  clone.find('li').each((_, li) => {
    const t = cleanText($(li).text())
    $(li).replaceWith(`- ${t}\n`)
  })
  return cleanText(clone.text())
}

/** Collect content between a heading and the next heading of same/higher level. */
export function contentAfterHeading($: CheerioAPI, heading: Element): Cheerio<AnyNode> {
  const level = Number(heading.tagName.replace(/\D/g, '') || 2)
  const nodes: AnyNode[] = []
  let sib = heading.nextSibling
  while (sib) {
    if (sib.type === 'tag') {
      const tag = (sib as Element).tagName
      const m = tag.match(/^h(\d)$/i)
      if (m && Number(m[1]) <= level)
        break
      // MediaWiki wraps headings in div.mw-heading
      if (tag === 'div' && $(sib).hasClass('mw-heading')) {
        const inner = $(sib).children('h1,h2,h3,h4,h5,h6').get(0)
        if (inner) {
          const lvl = Number(inner.tagName.replace(/\D/g, ''))
          if (lvl <= level)
            break
        }
      }
      nodes.push(sib)
    }
    sib = sib.nextSibling
  }
  return $(nodes)
}
