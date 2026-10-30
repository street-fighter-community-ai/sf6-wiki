import type {
  CompileResult,
  DrillJson,
  DrillSlotJson,
  DrillYamlDoc,
  DrillYamlSlot,
  YamlStep,
} from './types.js'
import { emptyTitle, hold, motionDirs, splitMotionButton, tokenToMask } from './bitmasks.js'
import { resolveCharacter } from './characters.js'
import { normalizeDefaults, parseFrames, sequenceToSteps } from './parse.js'

const STAGE_MAP: Record<string, string> = {
  center: 'Center',
  left_corner: 'Left Corner',
  'left corner': 'Left Corner',
  left: 'Left Corner',
  right_corner: 'Right Corner',
  'right corner': 'Right Corner',
  right: 'Right Corner',
}

const PLAYBACK_MAP: Record<string, number> = {
  loop: 0,
  random: 1,
  sequential: 2,
}

const GAUGE_FULL = 60000

function gaugeValue(v: string | number | undefined, fallback: number): number {
  if (v == null)
    return fallback
  if (typeof v === 'number')
    return v
  const s = v.trim().toLowerCase()
  if (s === 'full' || s === 'max')
    return GAUGE_FULL
  if (s === 'empty' || s === '0')
    return 0
  const n = Number(s)
  if (Number.isFinite(n))
    return n
  throw new Error(`Invalid gauge value: ${v}`)
}

function newId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto)
    return crypto.randomUUID()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

function compileSteps(steps: YamlStep[], defaults: ReturnType<typeof normalizeDefaults>, warnings: string[]): number[] {
  const frames: number[] = []
  for (const step of steps) {
    if ('wait' in step) {
      frames.push(...hold(0, parseFrames(step.wait, 0)))
      continue
    }
    if ('raw' in step) {
      frames.push(...step.raw)
      continue
    }
    if ('walk' in step) {
      const dirTok = String(step.walk)
      const mask = tokenToMask(dirTok) ?? tokenToMask(dirTok.length === 1 ? dirTok : '6')
      if (mask == null) {
        warnings.push(`Unknown walk direction: ${step.walk}`)
        continue
      }
      const n = parseFrames(step.frames, 12)
      frames.push(...hold(mask, n))
      continue
    }
    if ('hold' in step && !('move' in step)) {
      const mask = typeof step.hold === 'number' ? step.hold : tokenToMask(String(step.hold))
      if (mask == null) {
        warnings.push(`Unknown hold token: ${step.hold}`)
        continue
      }
      frames.push(...hold(mask, parseFrames(step.frames, defaults.button_hold)))
      continue
    }
    if ('move' in step) {
      frames.push(...compileMove(step.move, parseFrames(step.hold, defaults.button_hold), defaults, warnings))
    }
  }
  return frames
}

function compileMove(
  move: string,
  buttonHold: number,
  defaults: ReturnType<typeof normalizeDefaults>,
  warnings: string[],
): number[] {
  const t = move.trim()
  const upper = t.toUpperCase()

  // Pure direction hold as move
  if (/^[1-9]$/.test(upper)) {
    const mask = tokenToMask(upper)
    return hold(mask ?? 0, buttonHold)
  }

  const split = splitMotionButton(t)
  if (!split) {
    const mask = tokenToMask(t)
    if (mask != null)
      return hold(mask, buttonHold)
    warnings.push(`Unrecognized move token: ${t}`)
    return []
  }

  const out: number[] = []
  if (split.motion.length >= 2) {
    for (const d of motionDirs(split.motion))
      out.push(...hold(d, defaults.motion_step))
  }
  else if (split.motion.length === 1) {
    // e.g. 2LP — direction is part of the button mask, not a motion
  }

  const btnToken = split.motion.length === 1
    ? `${split.motion}${split.button}`
    : split.button
  const mask = tokenToMask(
    split.button === 'THROW' || split.button === 'LPLK' || split.button.includes('THROW')
      ? split.button
      : (split.motion.length <= 1 ? btnToken : split.button),
  )
  // For 5HK / 2MP: use full token
  const fullMask = tokenToMask(
    split.motion.length <= 1 ? `${split.motion || '5'}${split.button}` : split.button,
  ) ?? mask

  if (fullMask == null) {
    warnings.push(`Could not resolve button for: ${t}`)
    return out
  }

  // Specials with motion: button alone (no dir), normals: include crouch dir etc.
  if (split.motion.length >= 2)
    out.push(...hold(tokenToMask(split.button) ?? fullMask, buttonHold))
  else
    out.push(...hold(fullMask, buttonHold))

  return out
}

function compileSlot(
  slot: DrillYamlSlot,
  index: number,
  defaults: ReturnType<typeof normalizeDefaults>,
  warnings: string[],
): DrillSlotJson {
  const id = slot.id ?? index
  let steps = slot.steps
  if (!steps?.length && slot.sequence)
    steps = sequenceToSteps(slot.sequence, defaults)
  if (!steps?.length) {
    warnings.push(`Slot ${id}: empty sequence/steps`)
    return emptySlot(id, slot.weight ?? 1)
  }

  const raw = compileSteps(steps, defaults, warnings)
  if (defaults.end_idle > 0)
    raw.push(...hold(0, defaults.end_idle))

  return {
    slot_index: id,
    cmd_type: 0,
    is_active: true,
    is_loop: false,
    is_valid: true,
    negative_edge: false,
    state: 1,
    weight: slot.weight ?? 1,
    frame_count: raw.length,
    raw_inputs: raw,
    title: emptyTitle(),
  }
}

function emptySlot(index: number, weight: number): DrillSlotJson {
  return {
    slot_index: index,
    cmd_type: 0,
    is_active: false,
    is_loop: false,
    is_valid: false,
    negative_edge: false,
    state: 0,
    weight,
    frame_count: 0,
    raw_inputs: [],
    title: emptyTitle(),
  }
}

export function compileDrillYaml(doc: DrillYamlDoc): CompileResult {
  const warnings: string[] = []
  if (doc.schema !== 'sf6-drill/v1')
    warnings.push(`Unexpected schema: ${String(doc.schema)} (expected sf6-drill/v1)`)

  const defaults = normalizeDefaults(doc.defaults)
  const char = resolveCharacter(doc.character)
  const playbackRaw = doc.training?.playback ?? 'random'
  const playback = typeof playbackRaw === 'number'
    ? playbackRaw
    : (PLAYBACK_MAP[String(playbackRaw).toLowerCase()] ?? 1)

  const stageKey = (doc.training?.stage ?? 'center').toLowerCase()
  const stage = STAGE_MAP[stageKey] ?? doc.training?.stage ?? 'Center'

  const slots = (doc.slots ?? []).map((s, i) => compileSlot(s, i + 1, defaults, warnings))

  const drill: DrillJson = {
    version: 1,
    metadata: {
      id: doc.meta.id ?? newId(),
      title: doc.meta.title,
      author: doc.meta.author ?? 'sf6-drill-lang',
      created_at: doc.meta.created_at ?? new Date().toISOString().replace(/\.\d{3}Z$/, '.000Z'),
      tags: doc.meta.tags ?? [],
      description: doc.meta.description ?? '',
    },
    compatibility: {
      dummy_character_id: char.id,
      dummy_character_name: char.name,
    },
    training_settings: {
      stage_position: stage,
      player_drive_gauge: gaugeValue(doc.training?.player_drive, GAUGE_FULL),
      dummy_drive_gauge: gaugeValue(doc.training?.dummy_drive, GAUGE_FULL),
      player_super_gauge: gaugeValue(doc.training?.player_super, 0),
      dummy_super_gauge: gaugeValue(doc.training?.dummy_super, 0),
      dummy_stance: 0,
      dummy_guard: 0,
      throw_escape: doc.training?.throw_escape ?? 1,
      dummy_recovery: 0,
      dummy_counter: 0,
    },
    action_record: {
      global_settings: {
        info_type: 2,
        loop_type: 1,
        play_type: playback,
        record_countdown: 0,
        record_start_type: 0,
        record_type: 1,
      },
      playback_mode: playback,
      reversal_slots: { damage: [], down: [], guard: [] },
      slots,
    },
  }

  return { drill, warnings }
}
