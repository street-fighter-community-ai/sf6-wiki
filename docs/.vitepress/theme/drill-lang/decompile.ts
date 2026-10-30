import YAML from 'yaml'
import type { DecompileResult, DrillJson, DrillYamlDoc, DrillYamlSlot, YamlStep } from './types.js'
import { maskToLabel } from './bitmasks.js'
import { CHARACTER_NAMES } from './characters.js'

function rleToSteps(raw: number[]): YamlStep[] {
  if (!raw.length)
    return []
  const steps: YamlStep[] = []
  let i = 0
  while (i < raw.length) {
    const mask = raw[i]!
    let n = 1
    while (i + n < raw.length && raw[i + n] === mask)
      n++
    if (mask === 0)
      steps.push({ wait: `${n}f` })
    else {
      const label = maskToLabel(mask)
      // pure direction → walk; with buttons → hold
      if (/^[1-9]$/.test(label))
        steps.push({ walk: label, frames: `${n}f` })
      else
        steps.push({ hold: label, frames: `${n}f` })
    }
    i += n
  }
  // Trim trailing long idle a bit for readability? Keep as-is for round-trip fidelity.
  return steps
}

function stageKey(stage: unknown): string {
  const s = String(stage ?? 'Center')
  if (/left/i.test(s))
    return 'left_corner'
  if (/right/i.test(s))
    return 'right_corner'
  return 'center'
}

function playbackKey(mode: number): 'loop' | 'random' | 'sequential' {
  if (mode === 0)
    return 'loop'
  if (mode === 2)
    return 'sequential'
  return 'random'
}

function gaugeLabel(n: unknown): string | number {
  if (n === 60000)
    return 'full'
  if (n === 0)
    return 'empty'
  return typeof n === 'number' ? n : Number(n) || 0
}

/** Best-effort JSON → YAML doc. Uses expanded steps (decoded masks), not invented combo strings. */
export function decompileDrillJson(drill: DrillJson): DecompileResult {
  const warnings: string[] = []
  if (drill.version !== 1)
    warnings.push(`Unsupported version ${drill.version}`)

  const id = drill.compatibility.dummy_character_id
  const name = drill.compatibility.dummy_character_name || CHARACTER_NAMES[id] || String(id)
  const ts = drill.training_settings ?? {}

  const slots: DrillYamlSlot[] = (drill.action_record.slots ?? [])
    .filter(s => s.is_valid && s.raw_inputs?.length)
    .map((s) => {
      const steps = rleToSteps(s.raw_inputs)
      return {
        id: s.slot_index,
        label: `Slot ${s.slot_index}`,
        weight: s.weight ?? 1,
        steps,
      }
    })

  if (!slots.length)
    warnings.push('No active slots with raw_inputs found')

  const doc: DrillYamlDoc = {
    schema: 'sf6-drill/v1',
    meta: {
      title: drill.metadata.title,
      id: drill.metadata.id,
      author: drill.metadata.author,
      created_at: drill.metadata.created_at,
      tags: drill.metadata.tags,
      description: drill.metadata.description,
    },
    character: name,
    training: {
      stage: stageKey(ts.stage_position),
      player_drive: gaugeLabel(ts.player_drive_gauge),
      dummy_drive: gaugeLabel(ts.dummy_drive_gauge),
      player_super: gaugeLabel(ts.player_super_gauge),
      dummy_super: gaugeLabel(ts.dummy_super_gauge),
      playback: playbackKey(drill.action_record.playback_mode ?? drill.action_record.global_settings?.play_type ?? 1),
      throw_escape: typeof ts.throw_escape === 'number' ? ts.throw_escape : 1,
    },
    slots,
  }

  warnings.push(
    'Decompile emits expanded steps (hold/wait/walk) from raw_inputs; combo sequence strings are not reconstructed.',
  )

  const yaml = YAML.stringify(doc, {
    lineWidth: 100,
    defaultKeyType: 'PLAIN',
    defaultStringType: 'PLAIN',
  })

  return { yaml, doc, warnings }
}
