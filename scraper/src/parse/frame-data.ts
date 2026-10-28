import type { Cheerio, CheerioAPI } from 'cheerio'
import type { Element } from 'domhandler'
import type { FrameDataResult, MarkdownTable } from '../types.js'
import * as cheerio from 'cheerio'
import { cellText, cleanText, escapeMdCell } from './html.js'

function parseCargoTable($: CheerioAPI, table: Cheerio<Element>): MarkdownTable | null {
  const headerCells = table.find('thead tr th, tr').first().find('th')
  let headers: string[] = []
  if (headerCells.length) {
    headers = headerCells.toArray().map(th => escapeMdCell(cellText($, th)))
  }
  else {
    table.find('tr').first().children('th,td').each((_, c) => {
      headers.push(escapeMdCell(cellText($, c)))
    })
  }
  if (!headers.length)
    return null

  const rows: string[][] = []
  table.find('tbody tr').each((_, tr) => {
    // skip nested detail rows without useful cells
    const cells = $(tr).children('td, th')
    if (!cells.length)
      return
    const row = cells.toArray().map(c => escapeMdCell(cellText($, c)))
    if (row.every(c => !c))
      return
    while (row.length < headers.length) row.push('')
    rows.push(row.slice(0, headers.length))
  })

  // If no tbody, use all tr except first
  if (rows.length === 0) {
    table.find('tr').slice(1).each((_, tr) => {
      const row = $(tr).children('td, th').toArray().map(c => escapeMdCell(cellText($, c)))
      if (row.some(c => c))
        rows.push(row)
    })
  }

  return { headers, rows }
}

export function parseFrameData(html: string): FrameDataResult {
  const $ = cheerio.load(html)
  $('style, script, .mw-editsection, link').remove()

  let vitals: MarkdownTable | undefined
  const vitalsTable = $('table.cargoTable').first()
  if (vitalsTable.length) {
    const parsed = parseCargoTable($, vitalsTable)
    if (parsed)
      vitals = { ...parsed, caption: 'Vitals' }
  }

  const moveTables: FrameDataResult['moveTables'] = []

  // Prefer General tab panels of each tabber, else all cargoDynamicTable
  const panels = $('article.tabber__panel')
  if (panels.length) {
    panels.each((_, panel) => {
      const $panel = $(panel)
      const label = cleanText($panel.attr('data-title') || $panel.attr('aria-label') || '')
      // Only take General tabs to avoid huge duplicate matrices
      const id = $panel.attr('id') || ''
      const isGeneral = /general/i.test(label) || /general/i.test(id) || label === ''
      if (!isGeneral && label && !/general/i.test(label))
        return

      $panel.find('table.cargoDynamicTable, table.display').each((__, table) => {
        const parsed = parseCargoTable($, $(table))
        if (!parsed || !parsed.rows.length)
          return
        // Find preceding heading text
        let sectionTitle = 'Moves'
        const prevHeading = $(table).closest('article, div, section').prevAll('.mw-heading, h2, h3').first()
        if (prevHeading.length)
          sectionTitle = cleanText(prevHeading.find('h2,h3,h4').first().text() || prevHeading.text())
        moveTables.push({
          sectionTitle: sectionTitle || 'Moves',
          tabLabel: label || 'General',
          table: parsed,
        })
      })
    })
  }

  if (moveTables.length === 0) {
    $('table.cargoDynamicTable, table.display').each((_, table) => {
      const parsed = parseCargoTable($, $(table))
      if (parsed?.rows.length)
        moveTables.push({ sectionTitle: 'Frame data', table: parsed })
    })
  }

  // Deduplicate identical header+first row signatures
  const seen = new Set<string>()
  const unique = moveTables.filter((t) => {
    const key = `${t.sectionTitle}|${t.table.headers.join(',')}|${t.table.rows[0]?.join(',')}`
    if (seen.has(key))
      return false
    seen.add(key)
    return true
  })

  return { vitals, moveTables: unique }
}
