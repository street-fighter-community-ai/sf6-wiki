import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { parseMoves } from './moves.js'

const fixture = readFileSync(
  resolve(import.meta.dirname, '../../fixtures/ryu-movedata.fragment.html'),
  'utf8',
)

describe('parseMoves', () => {
  it('finds movedata containers with images or inputs', () => {
    const result = parseMoves(fixture)
    const moves = result.sections.flatMap(s => s.moves)
    expect(moves.length).toBeGreaterThan(0)
    const withAsset = moves.some(m => m.images.length > 0 || m.classicInput || m.modernInput || m.name.length > 0)
    expect(withAsset).toBe(true)
  })

  it('extracts frame notes and description prose from movedata-flex-information', () => {
    const result = parseMoves(fixture)
    const fiveLp = result.sections.flatMap(s => s.moves).find(m => /5LP/i.test(m.name))
    expect(fiveLp).toBeTruthy()
    expect(fiveLp!.notes.some(n => /Hitconfirm/i.test(n))).toBe(true)
    expect(fiveLp!.description && fiveLp!.description.length).toBeGreaterThan(40)
    expect(fiveLp!.displayName).toMatch(/Standing Light Punch/i)
  })
})
