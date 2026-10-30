<script setup lang="ts">
import { computed, ref } from 'vue'
import CodeEditor from './CodeEditor.vue'
import { drillToJsonString, drillToYaml, yamlToDrill } from './drill-lang'

const SAMPLE = `schema: sf6-drill/v1

meta:
  title: A.K.I. 5HK routes
  author: sf6-wiki
  tags: [aki, bnb, blockstring]
  description: |
    BnB convert and 214LP~6P route from standing HK.

character: A.K.I.

training:
  stage: left_corner
  playback: random
  player_drive: full
  dummy_drive: full

defaults:
  button_hold: 3f
  motion_step: 2f
  cancel_gap: 6f
  link_gap: 14f
  followup_gap: 4f
  end_idle: 24f

slots:
  - id: 1
    label: BnB
    weight: 2
    sequence: "5HK > 2PP~K, 2LP > 2LP > 236HP"

  - id: 2
    label: Flame-style cancel
    weight: 2
    sequence: "5HK > 214LP~6P"

  - id: 3
    label: Tick throw
    weight: 1
    steps:
      - move: 5HK
      - wait: 4f
      - move: throw
      - wait: 40f
`

const yamlText = ref(SAMPLE)
const jsonText = ref('')
const mode = ref<'y2j' | 'j2y'>('y2j')
const error = ref('')
const warnings = ref<string[]>([])
const status = ref('')

const canConvert = computed(() => mode.value === 'y2j' ? yamlText.value.trim() : jsonText.value.trim())

function convert() {
  error.value = ''
  warnings.value = []
  status.value = ''
  try {
    if (mode.value === 'y2j') {
      const { drill, warnings: w } = yamlToDrill(yamlText.value)
      jsonText.value = drillToJsonString(drill)
      warnings.value = w
      status.value = 'YAML → JSON ok'
    }
    else {
      const { yaml, warnings: w } = drillToYaml(jsonText.value)
      yamlText.value = yaml
      warnings.value = w
      status.value = 'JSON → YAML ok'
    }
  }
  catch (e) {
    error.value = e instanceof Error ? e.message : String(e)
  }
}

async function copy(which: 'yaml' | 'json') {
  const text = which === 'yaml' ? yamlText.value : jsonText.value
  try {
    await navigator.clipboard.writeText(text)
    status.value = `${which.toUpperCase()} copiado`
  }
  catch {
    status.value = 'Falha ao copiar (permissão do navegador)'
  }
}

function loadSample() {
  mode.value = 'y2j'
  yamlText.value = SAMPLE
  jsonText.value = ''
  error.value = ''
  warnings.value = []
  status.value = 'Exemplo carregado'
}

function swapMode() {
  mode.value = mode.value === 'y2j' ? 'j2y' : 'y2j'
  error.value = ''
  status.value = mode.value === 'y2j' ? 'Modo: YAML → JSON' : 'Modo: JSON → YAML'
}
</script>

<template>
  <div class="drill-builder">
    <header class="drill-builder__head">
      <p class="drill-builder__lede">
        Converte <strong>YAML legível</strong> (notação SuperCombo) ↔ <strong>JSON do drill</strong> no seu navegador.
        Nada é enviado a um servidor. Editores com syntax highlight (YAML / JSON).
      </p>
      <div class="drill-builder__actions">
        <button type="button" class="drill-builder__btn" @click="swapMode">
          {{ mode === 'y2j' ? 'YAML → JSON' : 'JSON → YAML' }} (alternar)
        </button>
        <button type="button" class="drill-builder__btn drill-builder__btn--primary" :disabled="!canConvert" @click="convert">
          Converter
        </button>
        <button type="button" class="drill-builder__btn" @click="loadSample">
          Exemplo A.K.I.
        </button>
      </div>
    </header>

    <p v-if="status" class="drill-builder__status">
      {{ status }}
    </p>
    <p v-if="error" class="drill-builder__error">
      {{ error }}
    </p>
    <ul v-if="warnings.length" class="drill-builder__warn">
      <li v-for="(w, i) in warnings" :key="i">
        {{ w }}
      </li>
    </ul>

    <div class="drill-builder__grid">
      <section class="drill-builder__pane">
        <div class="drill-builder__pane-head">
          <h3>YAML</h3>
          <button type="button" class="drill-builder__btn drill-builder__btn--sm" @click="copy('yaml')">
            Copiar
          </button>
        </div>
        <CodeEditor
          v-model="yamlText"
          language="yaml"
          aria-label="YAML do drill"
        />
      </section>

      <section class="drill-builder__pane">
        <div class="drill-builder__pane-head">
          <h3>JSON</h3>
          <button type="button" class="drill-builder__btn drill-builder__btn--sm" @click="copy('json')">
            Copiar
          </button>
        </div>
        <CodeEditor
          v-model="jsonText"
          language="json"
          aria-label="JSON do drill"
        />
      </section>
    </div>
  </div>
</template>

<style scoped>
.drill-builder {
  margin: 1.25rem 0 2rem;
  padding: 1rem 1.1rem 1.25rem;
  border: 1px solid var(--border, var(--vp-c-border));
  border-radius: var(--radius, 10px);
  background: var(--bg-elevated, var(--vp-c-bg-alt));
}

.drill-builder__lede {
  margin: 0 0 0.85rem;
  color: var(--text-mute, var(--vp-c-text-2));
  font-size: 0.95rem;
  line-height: 1.55;
}

.drill-builder__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.drill-builder__btn {
  appearance: none;
  border: 1px solid var(--border, var(--vp-c-border));
  border-radius: var(--radius-sm, 6px);
  background: var(--bg-mute, var(--vp-c-bg-soft));
  color: var(--text, var(--vp-c-text-1));
  padding: 0.4rem 0.75rem;
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
}

.drill-builder__btn:hover:not(:disabled) {
  border-color: var(--accent, var(--vp-c-brand-1));
}

.drill-builder__btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.drill-builder__btn--primary {
  background: var(--accent, var(--vp-c-brand-1));
  border-color: transparent;
  color: #fff;
}

.drill-builder__btn--primary:hover:not(:disabled) {
  filter: brightness(1.08);
}

.drill-builder__btn--sm {
  padding: 0.2rem 0.55rem;
  font-size: 0.8rem;
}

.drill-builder__status {
  margin: 0.75rem 0 0;
  color: var(--accent-2, #0891b2);
  font-size: 0.875rem;
}

.drill-builder__error {
  margin: 0.75rem 0 0;
  color: var(--accent, #e10600);
  font-size: 0.875rem;
}

.drill-builder__warn {
  margin: 0.5rem 0 0;
  padding-left: 1.2rem;
  color: var(--accent-3, #c9a012);
  font-size: 0.85rem;
}

.drill-builder__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

@media (min-width: 960px) {
  .drill-builder__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.drill-builder__pane-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}

.drill-builder__pane-head h3 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
}
</style>
