<script setup lang="ts">
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands'
import { json } from '@codemirror/lang-json'
import { yaml } from '@codemirror/lang-yaml'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { EditorState } from '@codemirror/state'
import {
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from '@codemirror/view'
import { tags as t } from '@lezer/highlight'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
  language: 'yaml' | 'json'
  ariaLabel?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const host = ref<HTMLDivElement | null>(null)
let view: EditorView | null = null
let applyingExternal = false
let themeObserver: MutationObserver | null = null

/**
 * Syntax colors match VitePress adaptive Shiki (github-light / github-dark)
 * used by site ``` fences — not brand accents.
 */
const lightHighlight = HighlightStyle.define([
  { tag: t.keyword, color: '#d73a49' },
  { tag: t.operatorKeyword, color: '#d73a49' },
  { tag: t.bool, color: '#005cc5' },
  { tag: t.null, color: '#005cc5' },
  { tag: t.number, color: '#005cc5' },
  { tag: t.string, color: '#032f62' },
  { tag: t.special(t.string), color: '#032f62' },
  { tag: t.content, color: '#032f62' },
  { tag: t.literal, color: '#032f62' },
  { tag: t.atom, color: '#032f62' },
  { tag: t.propertyName, color: '#22863a' },
  { tag: t.definition(t.propertyName), color: '#22863a' },
  { tag: t.name, color: '#22863a' },
  { tag: t.labelName, color: '#22863a' },
  { tag: t.meta, color: '#6a737d' },
  { tag: t.comment, color: '#6a737d', fontStyle: 'italic' },
  { tag: t.punctuation, color: '#24292e' },
  { tag: t.bracket, color: '#24292e' },
  { tag: t.separator, color: '#24292e' },
  { tag: t.heading, color: '#22863a', fontWeight: '600' },
  { tag: t.invalid, color: '#d73a49', textDecoration: 'underline' },
])

const darkHighlight = HighlightStyle.define([
  { tag: t.keyword, color: '#ff7b72' },
  { tag: t.operatorKeyword, color: '#ff7b72' },
  { tag: t.bool, color: '#79c0ff' },
  { tag: t.null, color: '#79c0ff' },
  { tag: t.number, color: '#79c0ff' },
  { tag: t.string, color: '#9ecbff' },
  { tag: t.special(t.string), color: '#9ecbff' },
  { tag: t.content, color: '#9ecbff' },
  { tag: t.literal, color: '#9ecbff' },
  { tag: t.atom, color: '#9ecbff' },
  { tag: t.propertyName, color: '#85e89d' },
  { tag: t.definition(t.propertyName), color: '#85e89d' },
  { tag: t.name, color: '#85e89d' },
  { tag: t.labelName, color: '#85e89d' },
  { tag: t.meta, color: '#8b949e' },
  { tag: t.comment, color: '#8b949e', fontStyle: 'italic' },
  { tag: t.punctuation, color: '#e1e4e8' },
  { tag: t.bracket, color: '#e1e4e8' },
  { tag: t.separator, color: '#e1e4e8' },
  { tag: t.heading, color: '#85e89d', fontWeight: '600' },
  { tag: t.invalid, color: '#ff7b72', textDecoration: 'underline' },
])

/** Chrome mirrors VitePress `div[class*=language-]` code blocks. */
const chromeTheme = EditorView.theme({
  '&': {
    backgroundColor: 'var(--vp-code-block-bg)',
    color: 'var(--vp-code-block-color, var(--text))',
    fontSize: '0.875rem',
    height: '100%',
  },
  '.cm-scroller': {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace',
    lineHeight: '1.6',
  },
  '.cm-content': {
    caretColor: 'var(--text)',
    padding: '1.25rem 0',
    minHeight: '26rem',
  },
  '.cm-line': {
    padding: '0 1.25rem',
  },
  '.cm-gutters': {
    backgroundColor: 'var(--vp-code-block-bg)',
    color: 'var(--text-mute)',
    border: 'none',
    borderRight: '1px solid var(--border)',
    paddingLeft: '0.35rem',
  },
  '.cm-gutterElement': {
    padding: '0 0.75rem 0 0.5rem',
    minWidth: '2rem',
  },
  '.cm-activeLine': {
    backgroundColor: 'var(--vp-code-line-highlight-color)',
  },
  '.cm-activeLineGutter': {
    backgroundColor: 'var(--vp-code-line-highlight-color)',
    color: 'var(--text)',
  },
  '&.cm-focused': {
    outline: 'none',
  },
  '.cm-selectionBackground, &.cm-focused .cm-selectionBackground': {
    backgroundColor: 'color-mix(in srgb, var(--accent-2) 28%, transparent) !important',
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: 'var(--text)',
  },
  '.cm-matchingBracket': {
    backgroundColor: 'transparent',
    outline: '1px solid var(--accent-2)',
  },
  '.cm-placeholder': {
    color: 'var(--text-mute)',
  },
})

function langExtension() {
  return props.language === 'json' ? json() : yaml()
}

function isDark() {
  return typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
}

function createState(doc: string) {
  const highlight = isDark() ? darkHighlight : lightHighlight
  return EditorState.create({
    doc,
    extensions: [
      lineNumbers(),
      highlightActiveLine(),
      highlightActiveLineGutter(),
      history(),
      keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
      langExtension(),
      chromeTheme,
      syntaxHighlighting(highlight),
      EditorView.lineWrapping,
      EditorView.updateListener.of((update) => {
        if (!update.docChanged || applyingExternal)
          return
        emit('update:modelValue', update.state.doc.toString())
      }),
      EditorView.editorAttributes.of({
        'aria-label': props.ariaLabel || `${props.language} editor`,
        class: 'sf6-cm',
      }),
    ],
  })
}

function setDoc(text: string) {
  if (!view)
    return
  const cur = view.state.doc.toString()
  if (cur === text)
    return
  applyingExternal = true
  view.dispatch({
    changes: { from: 0, to: view.state.doc.length, insert: text },
  })
  applyingExternal = false
}

function remount() {
  if (!view || !host.value)
    return
  const doc = view.state.doc.toString()
  view.destroy()
  view = new EditorView({
    state: createState(doc),
    parent: host.value,
  })
}

onMounted(() => {
  if (!host.value)
    return
  view = new EditorView({
    state: createState(props.modelValue || ''),
    parent: host.value,
  })

  themeObserver = new MutationObserver(() => remount())
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onBeforeUnmount(() => {
  themeObserver?.disconnect()
  themeObserver = null
  view?.destroy()
  view = null
})

watch(() => props.modelValue, (v) => {
  setDoc(v ?? '')
})

watch(() => props.language, () => {
  remount()
})
</script>

<template>
  <div ref="host" class="sf6-code-editor" />
</template>

<style scoped>
/* Same surface as VitePress fenced code blocks */
.sf6-code-editor {
  width: 100%;
  min-height: 28rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-code-block-bg);
}

.sf6-code-editor :deep(.cm-editor) {
  height: 28rem;
  background: transparent;
}

.sf6-code-editor :deep(.cm-scroller) {
  overflow: auto;
}

.sf6-code-editor :deep(.cm-scroller)::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.sf6-code-editor :deep(.cm-scroller)::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.sf6-code-editor :deep(.cm-scroller)::-webkit-scrollbar-track {
  background: transparent;
}
</style>
