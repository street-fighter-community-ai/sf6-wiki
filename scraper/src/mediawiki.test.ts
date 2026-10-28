import { describe, expect, it } from 'vitest'
import { isChallengeBody, parseApiUrl, preferOriginalImageUrl, toFetchUrl } from './mediawiki.js'

describe('mediawiki API client', () => {
  it('builds action=parse URL with required params', () => {
    const url = new URL(parseApiUrl('Street Fighter 6/Ryu'))
    expect(url.pathname).toBe('/api.php')
    expect(url.searchParams.get('action')).toBe('parse')
    expect(url.searchParams.get('page')).toBe('Street Fighter 6/Ryu')
    expect(url.searchParams.get('prop')).toBe('text|sections')
    expect(url.searchParams.get('redirects')).toBe('1')
    expect(url.searchParams.get('format')).toBe('json')
  })

  it('detects Cloudflare / challenge HTML', () => {
    expect(isChallengeBody('<html>Just a moment...</html>')).toBe(true)
    expect(isChallengeBody('cf-challenge platform')).toBe(true)
    expect(isChallengeBody('Anubis proof-of-work')).toBe(true)
    expect(isChallengeBody('<div class="mw-parser-output">Ryu</div>')).toBe(false)
  })

  it('rewrites supercombo image hosts to the fetch mirror', () => {
    expect(toFetchUrl('https://wiki.supercombo.gg/images/1/12/SF6_Cammy_Portrait.png'))
      .toBe('https://srk.shib.live/images/1/12/SF6_Cammy_Portrait.png')
    expect(preferOriginalImageUrl('/images/thumb/1/12/SF6_Cammy_Portrait.png/64px-SF6_Cammy_Portrait.png'))
      .toBe('https://srk.shib.live/images/1/12/SF6_Cammy_Portrait.png')
  })
})
