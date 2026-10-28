import { describe, expect, it } from 'vitest'
import { rewriteImagesToMirror, rewriteMarkdownImages } from './images.js'

describe('image URL rewriting', () => {
  it('rewrites supercombo image URLs to the mirror full-size path', () => {
    const md = '![Cammy](https://wiki.supercombo.gg/images/thumb/1/12/SF6_Cammy_Portrait.png/64px-SF6_Cammy_Portrait.png)'
    expect(rewriteImagesToMirror(md)).toBe(
      '![Cammy](https://srk.shib.live/images/1/12/SF6_Cammy_Portrait.png)',
    )
  })

  it('keeps mirror URLs and strips thumbs', () => {
    const md = '![x](https://srk.shib.live/images/thumb/a/a0/SF6_Cammy_5lp.png/300px-SF6_Cammy_5lp.png)'
    expect(rewriteMarkdownImages(md, new Map())).toContain(
      'https://srk.shib.live/images/a/a0/SF6_Cammy_5lp.png',
    )
  })
})
