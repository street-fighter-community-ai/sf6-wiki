import type { CompileDefaults, YamlStep } from './types.js'

export function parseFrames(value: number | string | undefined, fallback: number): number {
  if (value == null)
    return fallback
  if (typeof value === 'number')
    return Math.max(0, Math.floor(value))
  const s = String(value).trim().toLowerCase()
  const m = s.match(/^(\d+)\s*f?$/)
  if (!m)
    throw new Error(`Invalid frame value: ${value}`)
  return Number(m[1])
}

export function normalizeDefaults(d: CompileDefaults | undefined) {
  return {
    button_hold: parseFrames(d?.button_hold, 3),
    motion_step: parseFrames(d?.motion_step, 2),
    cancel_gap: parseFrames(d?.cancel_gap, 6),
    link_gap: parseFrames(d?.link_gap, 14),
    followup_gap: parseFrames(d?.followup_gap, 4),
    delay_default: parseFrames(d?.delay_default, 3),
    end_idle: parseFrames(d?.end_idle, 24),
  }
}

/**
 * Parse SuperCombo-style sequence into YamlSteps.
 * Supports: `>`, `~`, `,`, `dl.Nf`, `dl.X`, walk/throw tokens, DR (as wait+walk heuristic).
 */
export function sequenceToSteps(sequence: string, defaults = normalizeDefaults(undefined)): YamlStep[] {
  const raw = sequence.trim()
  if (!raw)
    return []

  // Normalize separators with spaces for splitting while keeping ~ glued sometimes
  // Split on > , and ~ but keep operator meaning via sequential processing
  const parts = tokenizeSequence(raw)
  const steps: YamlStep[] = []

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]!
    if (part.kind === 'sep') {
      if (part.value === '>')
        steps.push({ wait: `${defaults.cancel_gap}f` })
      else if (part.value === ',')
        steps.push({ wait: `${defaults.link_gap}f` })
      else if (part.value === '~')
        steps.push({ wait: `${defaults.followup_gap}f` })
      continue
    }

    let token = part.value
    // Context prefixes from combo wiki — not inputs
    token = token.replace(/^(CH|PC|AA|PDR)\./i, '').replace(/^(CH|PC|AA)\s+/i, '')
    if (/^(CH|PC|AA)$/i.test(token))
      continue

    // dl.5f MOVE or dl.MOVE
    const dlNum = token.match(/^dl\.(\d+)f?$/i)
    if (dlNum) {
      steps.push({ wait: `${Number(dlNum[1])}f` })
      continue
    }
    const dlMove = token.match(/^dl\.(.+)$/i)
    if (dlMove) {
      steps.push({ wait: `${defaults.delay_default}f` })
      token = dlMove[1]!
    }

    const upper = token.toUpperCase()
    if (upper === 'DR' || upper === 'PDR' || upper === 'DRC') {
      // Heuristic: double-forward dash frames (not perfect Drive Rush)
      steps.push({ walk: '6', frames: '2f' })
      steps.push({ wait: '2f' })
      steps.push({ walk: '6', frames: '8f' })
      continue
    }
    if (upper === 'WALK' || upper === 'FF' || upper === '66') {
      steps.push({ walk: '6', frames: '12f' })
      continue
    }
    if (upper === 'BB' || upper === '44') {
      steps.push({ walk: '4', frames: '12f' })
      continue
    }

    steps.push({ move: token })
  }

  return steps
}

type Tok = { kind: 'tok', value: string } | { kind: 'sep', value: '>' | '~' | ',' }

function tokenizeSequence(input: string): Tok[] {
  const s = input.replace(/\s*>\s*/g, ' > ').replace(/\s*,\s*/g, ' , ').replace(/\s*~\s*/g, ' ~ ')
  const chunks = s.split(/\s+/).filter(Boolean)
  const out: Tok[] = []
  for (const c of chunks) {
    if (c === '>' || c === '~' || c === ',')
      out.push({ kind: 'sep', value: c })
    else
      out.push({ kind: 'tok', value: c })
  }
  return out
}
