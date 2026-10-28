import type { ComboGroup, CombosData } from '../types.js'
import * as cheerio from 'cheerio'
import { cellText, cleanText, escapeMdCell, paragraphTexts } from './html.js'

export function parseCombos(html: string): CombosData {
  const $ = cheerio.load(html)
  $('style, script, .mw-editsection, link').remove()

  const prose = paragraphTexts($, $.root())
  const groups: ComboGroup[] = []

  let tables = $('table.wikitable.sortable.sf6-combotable')
  if (!tables.length)
    tables = $('table.wikitable.sortable')

  tables.each((_, table) => {
    const $table = $(table)
    const state: { current: ComboGroup | null, headers: string[] } = {
      current: null,
      headers: [],
    }

    $table.find('tr').each((__, tr) => {
      const $tr = $(tr)
      const groupTh = $tr.children('th[colspan]')
      if (groupTh.length === 1 && $tr.children().length === 1) {
        if (state.current && state.current.rows.length)
          groups.push(state.current)
        state.current = {
          title: cleanText(groupTh.text()) || 'Combos',
          headers: [],
          rows: [],
        }
        return
      }

      if ($tr.hasClass('sf6-combotable-header') || $tr.children('th').length > 1) {
        state.headers = $tr.children('th, td').toArray().map(c => escapeMdCell(cellText($, c)))
        if (state.current)
          state.current.headers = state.headers
        else
          state.current = { title: 'Combos', headers: state.headers, rows: [] }
        return
      }

      const cells = $tr.children('td')
      if (!cells.length)
        return
      if (!state.current) {
        state.current = {
          title: 'Combos',
          headers: state.headers.length ? state.headers : [],
          rows: [],
        }
      }
      if (!state.current.headers.length && state.headers.length)
        state.current.headers = state.headers

      const row = cells.toArray().map(c => escapeMdCell(cellText($, c)))
      if (row.some(c => c))
        state.current.rows.push(row)
    })

    if (state.current && (state.current.rows.length || state.current.headers.length)) {
      if (!state.current.headers.length) {
        const width = Math.max(0, ...state.current.rows.map(r => r.length))
        state.current.headers = Array.from({ length: width }, (_, i) => `Col ${i + 1}`)
      }
      groups.push(state.current)
    }
  })

  return { groups, prose: prose.slice(0, 20) }
}
