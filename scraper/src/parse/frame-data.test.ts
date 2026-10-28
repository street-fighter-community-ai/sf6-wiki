import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { parseFrameData } from './frame-data.js'

const fixture = readFileSync(
  resolve(import.meta.dirname, '../../fixtures/ryu-frame-data.fragment.html'),
  'utf8',
)

describe('parseFrameData', () => {
  it('extracts vitals and at least one move table with real columns', () => {
    const result = parseFrameData(fixture)
    expect(result.moveTables.length).toBeGreaterThan(0)
    const first = result.moveTables[0].table
    expect(first.headers.length).toBeGreaterThan(3)
    expect(first.rows.length).toBeGreaterThan(0)
    const headerBlob = first.headers.join(' ').toLowerCase()
    expect(headerBlob).toMatch(/startup|damage|active|recovery|hit|block/)
  })
})
