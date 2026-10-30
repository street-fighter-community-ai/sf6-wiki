import YAML from 'yaml'
import type { CompileResult, DecompileResult, DrillJson, DrillYamlDoc } from './types.js'
import { compileDrillYaml } from './compile.js'
import { decompileDrillJson } from './decompile.js'

export type {
  CompileResult,
  DecompileResult,
  DrillJson,
  DrillYamlDoc,
  DrillYamlSlot,
  YamlStep,
} from './types.js'

export { compileDrillYaml } from './compile.js'
export { decompileDrillJson } from './decompile.js'
export { sequenceToSteps } from './parse.js'
export { resolveCharacter, CHARACTER_IDS, CHARACTER_NAMES } from './characters.js'
export { maskToLabel, tokenToMask } from './bitmasks.js'

export function parseDrillYaml(source: string): DrillYamlDoc {
  const doc = YAML.parse(source) as DrillYamlDoc
  if (!doc || typeof doc !== 'object')
    throw new Error('YAML root must be a mapping')
  if (!doc.meta?.title)
    throw new Error('meta.title is required')
  if (doc.character == null || doc.character === '')
    throw new Error('character is required')
  if (!Array.isArray(doc.slots))
    throw new Error('slots must be an array')
  return doc
}

/** YAML string → canonical drill JSON (+ warnings). */
export function yamlToDrill(source: string): CompileResult {
  const doc = parseDrillYaml(source)
  if (!doc.schema)
    doc.schema = 'sf6-drill/v1'
  return compileDrillYaml(doc)
}

/** Drill JSON object or string → YAML (+ warnings). */
export function drillToYaml(input: string | DrillJson): DecompileResult {
  const drill = typeof input === 'string' ? (JSON.parse(input) as DrillJson) : input
  return decompileDrillJson(drill)
}

export function drillToJsonString(drill: DrillJson, pretty = true): string {
  return pretty ? `${JSON.stringify(drill, null, 2)}\n` : JSON.stringify(drill)
}
