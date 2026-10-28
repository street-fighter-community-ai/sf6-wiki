import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { parseCombos } from './combos.js'

const fixture = readFileSync(
  resolve(import.meta.dirname, '../../fixtures/ryu-combos.fragment.html'),
  'utf8',
)

describe('parseCombos', () => {
  it('parses sf6-combotable groups with combo rows', () => {
    const result = parseCombos(fixture)
    expect(result.groups.length).toBeGreaterThan(0)
    const group = result.groups[0]
    expect(group.headers.join(' ').toLowerCase()).toMatch(/combo|damage|difficulty|notes/)
    expect(group.rows.length).toBeGreaterThan(0)
    expect(group.rows.some(r => r.some(c => /[>\]]|\dLP|HK|Hadoken/i.test(c)))).toBe(true)
  })
})
