import { describe, expect, it } from 'vitest'
import { drillToYaml, sequenceToSteps, yamlToDrill } from './index.js'

const SAMPLE_YAML = `
schema: sf6-drill/v1
meta:
  title: A.K.I. 5HK routes
  author: test
  tags: [aki, bnb]
character: A.K.I.
training:
  stage: left_corner
  playback: random
  player_drive: full
defaults:
  button_hold: 3f
  motion_step: 2f
  end_idle: 10f
slots:
  - id: 1
    label: BnB
    weight: 2
    sequence: "5HK > 214LP~6P"
  - id: 2
    label: tick throw
    weight: 1
    steps:
      - move: 5HK
      - wait: 4f
      - move: throw
`

describe('sequenceToSteps', () => {
  it('splits cancel / link / follow-up', () => {
    const steps = sequenceToSteps('5HK > 2PP~K, 2LP > 236HP')
    const moves = steps.filter(s => 'move' in s).map(s => ('move' in s ? s.move : ''))
    expect(moves).toEqual(['5HK', '2PP', 'K', '2LP', '236HP'])
    expect(steps.some(s => 'wait' in s)).toBe(true)
  })
})

describe('yamlToDrill', () => {
  it('compiles YAML to schema v1 JSON', () => {
    const { drill, warnings } = yamlToDrill(SAMPLE_YAML)
    expect(warnings.length).toBeGreaterThanOrEqual(0)
    expect(drill.version).toBe(1)
    expect(drill.metadata.title).toBe('A.K.I. 5HK routes')
    expect(drill.compatibility.dummy_character_id).toBe(13)
    expect(drill.compatibility.dummy_character_name).toBe('A.K.I.')
    expect(drill.action_record.playback_mode).toBe(1)
    expect(drill.training_settings?.stage_position).toBe('Left Corner')
    expect(drill.action_record.slots).toHaveLength(2)
    const s1 = drill.action_record.slots[0]!
    expect(s1.is_valid).toBe(true)
    expect(s1.frame_count).toBe(s1.raw_inputs.length)
    expect(s1.raw_inputs.length).toBeGreaterThan(10)
    // 5HK uses HK bit 512
    expect(s1.raw_inputs.includes(512)).toBe(true)
    // 214 motion includes down/back bits
    expect(s1.raw_inputs.includes(2)).toBe(true)
    expect(s1.raw_inputs.includes(4)).toBe(true)
  })

  it('round-trips through JSON → YAML → JSON with same character and slot counts', () => {
    const { drill } = yamlToDrill(SAMPLE_YAML)
    const { yaml } = drillToYaml(drill)
    expect(yaml).toContain('sf6-drill/v1')
    expect(yaml).toContain('A.K.I.')
    const again = yamlToDrill(yaml)
    expect(again.drill.compatibility.dummy_character_id).toBe(13)
    expect(again.drill.action_record.slots.filter(s => s.is_valid).length).toBe(2)
  })
})
