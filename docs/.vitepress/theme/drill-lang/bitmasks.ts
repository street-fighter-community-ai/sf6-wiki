/** Input bitmasks derived from real SF6 Training recordings (not constants.BTN). */

export const DIR = {
  N: 0,
  U: 1,
  D: 2,
  B: 4,
  F: 8,
  UB: 5,
  DB: 6,
  UF: 9,
  DF: 10,
} as const

export const BTN = {
  LP: 16,
  MP: 32,
  HP: 64,
  LK: 128,
  MK: 256,
  HK: 512,
} as const

const DIR_BY_NUM: Record<string, number> = {
  '5': DIR.N,
  '8': DIR.U,
  '2': DIR.D,
  '4': DIR.B,
  '6': DIR.F,
  '7': DIR.UB,
  '1': DIR.DB,
  '9': DIR.UF,
  '3': DIR.DF,
}

const BTN_BY_NAME: Record<string, number> = {
  LP: BTN.LP,
  MP: BTN.MP,
  HP: BTN.HP,
  LK: BTN.LK,
  MK: BTN.MK,
  HK: BTN.HK,
  P: BTN.LP,
  K: BTN.LK,
  PP: BTN.LP | BTN.MP,
  KK: BTN.LK | BTN.MK,
  LPLK: BTN.LP | BTN.LK,
  THROW: BTN.LP | BTN.LK,
}

/** Parse a single token like `5HK`, `2`, `6+MK`, `236`, `LPLK`, `throw`. */
export function tokenToMask(token: string): number | null {
  const t = token.trim().toUpperCase().replace(/\s+/g, '')
  if (!t)
    return null
  if (t === 'N' || t === 'NEUTRAL' || t === '5')
    return DIR.N
  if (t === 'THROW' || t === 'LPLK')
    return BTN.LP | BTN.LK
  if (t === '6.THROW' || t === '6THROW' || t === 'F.THROW')
    return DIR.F | BTN.LP | BTN.LK
  if (t === '4.THROW' || t === '4THROW' || t === 'B.THROW')
    return DIR.B | BTN.LP | BTN.LK

  // Pure direction digit
  if (/^[1-9]$/.test(t))
    return DIR_BY_NUM[t] ?? null

  // Motion-only: 236, 214, 623, 41236, etc. — caller expands; here treat as last dir
  if (/^\d+$/.test(t) && t.length >= 2)
    return DIR_BY_NUM[t.at(-1)!] ?? null

  // 6+MK / 2+LP
  const plus = t.match(/^([1-9])\+([A-Z]+)$/)
  if (plus) {
    const d = DIR_BY_NUM[plus[1]!] ?? 0
    const b = BTN_BY_NAME[plus[2]!]
    if (b == null)
      return null
    return d | b
  }

  // 5HK, 2MP, 6HK, j.HP (ignore j. prefix for mask), 8j.HK → treat as button with dir
  const cleaned = t.replace(/^J\./, '').replace(/^8J\./, '')
  const m = cleaned.match(/^([1-9])?(LP|MP|HP|LK|MK|HK|PP|KK|P|K)$/)
  if (m) {
    const d = m[1] ? (DIR_BY_NUM[m[1]] ?? 0) : 0
    const b = BTN_BY_NAME[m[2]!]
    if (b == null)
      return null
    // Standing normals use neutral (5) → no dir bits
    if (m[1] === '5')
      return b
    return d | b
  }

  if (BTN_BY_NAME[t] != null)
    return BTN_BY_NAME[t]!

  return null
}

/** Expand a motion string like `236` into direction masks per step. */
export function motionDirs(motion: string): number[] {
  return [...motion].map((ch) => {
    const m = DIR_BY_NUM[ch]
    if (m == null)
      throw new Error(`Invalid motion digit: ${ch}`)
    return m
  })
}

/** Split a move token into optional motion digits + button part. */
export function splitMotionButton(token: string): { motion: string, button: string } | null {
  const t = token.trim().toUpperCase().replace(/\s+/g, '').replace(/^J\./, '')
  if (t === 'THROW' || t === 'LPLK' || t === '6.THROW' || t === '6THROW' || t === 'F.THROW'
    || t === '4.THROW' || t === '4THROW' || t === 'B.THROW') {
    return { motion: '', button: t }
  }
  // 236HP, 214LP, 623PP, 236236P, 2PP, 5HK, 6MK
  const m = t.match(/^(\d*)(LP|MP|HP|LK|MK|HK|PP|KK|P|K|LPLK|THROW)$/)
  if (!m)
    return null
  return { motion: m[1] || '', button: m[2]! }
}

export function maskToLabel(mask: number): string {
  if (mask === 0)
    return '5'
  const dirs: string[] = []
  if ((mask & DIR.U) && (mask & DIR.F))
    dirs.push('9')
  else if ((mask & DIR.U) && (mask & DIR.B))
    dirs.push('7')
  else if ((mask & DIR.D) && (mask & DIR.F))
    dirs.push('3')
  else if ((mask & DIR.D) && (mask & DIR.B))
    dirs.push('1')
  else if (mask & DIR.U)
    dirs.push('8')
  else if (mask & DIR.D)
    dirs.push('2')
  else if (mask & DIR.F)
    dirs.push('6')
  else if (mask & DIR.B)
    dirs.push('4')

  const btns: string[] = []
  if ((mask & BTN.LP) && (mask & BTN.LK) && !(mask & (BTN.MP | BTN.HP | BTN.MK | BTN.HK))) {
    btns.push((mask & DIR.F) ? '6.throw' : (mask & DIR.B) ? '4.throw' : 'throw')
    const dirOnly = mask & (DIR.U | DIR.D | DIR.B | DIR.F)
    // if throw consumed F/B, still ok
    void dirOnly
    return btns[0]!
  }
  if (mask & BTN.LP)
    btns.push('LP')
  if (mask & BTN.MP)
    btns.push('MP')
  if (mask & BTN.HP)
    btns.push('HP')
  if (mask & BTN.LK)
    btns.push('LK')
  if (mask & BTN.MK)
    btns.push('MK')
  if (mask & BTN.HK)
    btns.push('HK')

  if (dirs.length === 0 && btns.length === 1)
    return `5${btns[0]}`
  if (dirs.length === 1 && btns.length === 1)
    return `${dirs[0]}${btns[0]}`
  if (dirs.length === 1 && btns.length === 0)
    return dirs[0]!
  if (dirs.length === 0 && btns.length > 1)
    return btns.join('+')
  if (dirs.length && btns.length)
    return `${dirs[0]}+${btns.join('+')}`
  return `0x${mask.toString(16)}`
}

export function emptyTitle(): Record<string, number> {
  return {
    mData1: 0,
    mData2: 0,
    mData3: 0,
    mData4_0: 0,
    mData4_1: 0,
    mData4_2: 0,
    mData4_3: 0,
    mData4_4: 0,
    mData4_5: 0,
    mData4_6: 0,
    mData4_7: 0,
  }
}

export function hold(mask: number, frames: number): number[] {
  if (frames <= 0)
    return []
  return Array.from({ length: frames }, () => mask)
}
