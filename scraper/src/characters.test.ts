import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { parseHubCharacters, slugify } from './characters.js'

const fixture = readFileSync(
  resolve(import.meta.dirname, '../fixtures/hub-characters.fragment.html'),
  'utf8',
)

describe('parseHubCharacters', () => {
  it('lists SF6 roster characters including Ryu', () => {
    const chars = parseHubCharacters(fixture)
    expect(chars.length).toBeGreaterThan(10)
    expect(chars.some(c => c.pageName === 'Ryu' || c.slug === 'ryu')).toBe(true)
    expect(slugify('C.Viper')).toBe('c.viper')
    expect(slugify('C. Viper')).toBe('c.viper')
    expect(slugify('A.K.I.')).toBe('a.k.i')
    expect(slugify('Dee Jay')).toBe('dee-jay')
  })

  it('dedupes C.Viper vs C. Viper hub links to one slug', () => {
    const html = `
      <a href="/w/Street_Fighter_6/C.Viper">C.Viper</a>
      <a href="/w/Street_Fighter_6/C._Viper">C. Viper</a>
      <a href="/w/Street_Fighter_6/Ryu">Ryu</a>
    `
    const chars = parseHubCharacters(html)
    expect(chars.filter(c => c.slug === 'c.viper')).toHaveLength(1)
    expect(chars.find(c => c.slug === 'c.viper')?.pageName).toBe('C.Viper')
  })
})
