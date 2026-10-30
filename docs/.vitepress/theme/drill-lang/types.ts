/** Canonical SF6 Training Drill Share JSON (schema v1). */
export interface DrillJson {
  version: 1
  metadata: {
    id: string
    title: string
    author?: string
    created_at?: string
    tags?: string[]
    description?: string
  }
  compatibility: {
    dummy_character_id: number
    dummy_character_name?: string
    player_character_id?: number | null
  }
  training_settings?: Record<string, unknown>
  action_record: {
    global_settings: {
      info_type: number
      loop_type: number
      play_type: number
      record_countdown: number
      record_start_type: number
      record_type: number
    }
    playback_mode: number
    reversal_slots: {
      damage: unknown[]
      down: unknown[]
      guard: unknown[]
    }
    slots: DrillSlotJson[]
  }
}

export interface DrillSlotJson {
  slot_index: number
  cmd_type: number
  is_active: boolean
  is_loop: boolean
  is_valid: boolean
  negative_edge: boolean
  state: number
  weight: number
  frame_count: number
  raw_inputs: number[]
  title: Record<string, number>
}

/** Human-readable drill YAML document (sf6-drill/v1). */
export interface DrillYamlDoc {
  schema: 'sf6-drill/v1'
  meta: {
    title: string
    id?: string
    author?: string
    created_at?: string
    tags?: string[]
    description?: string
  }
  character: string | number
  facing?: 'right' | 'left'
  training?: {
    stage?: string
    player_drive?: string | number
    dummy_drive?: string | number
    player_super?: string | number
    dummy_super?: string | number
    playback?: 'loop' | 'random' | 'sequential' | number
    throw_escape?: number
  }
  defaults?: CompileDefaults
  slots: DrillYamlSlot[]
}

export interface CompileDefaults {
  button_hold?: number | string
  motion_step?: number | string
  cancel_gap?: number | string
  link_gap?: number | string
  followup_gap?: number | string
  delay_default?: number | string
  end_idle?: number | string
}

export interface DrillYamlSlot {
  id?: number
  label?: string
  weight?: number
  /** SuperCombo-style string, e.g. `5HK > 2PP~K, 2LP > 236HP` */
  sequence?: string
  /** Explicit recording steps when timing must be precise */
  steps?: YamlStep[]
}

export type YamlStep =
  | { move: string, hold?: number | string }
  | { wait: number | string }
  | { walk: string | number, frames?: number | string }
  | { hold: string | number, frames?: number | string }
  | { raw: number[], note?: string }

export interface CompileResult {
  drill: DrillJson
  warnings: string[]
}

export interface DecompileResult {
  yaml: string
  doc: DrillYamlDoc
  warnings: string[]
}
