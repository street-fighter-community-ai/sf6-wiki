<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const STORAGE_KEY = 'sf6-show-hitboxes'
const show = ref(false)
const visible = ref(false)
const route = useRoute()

function applyClass() {
  document.documentElement.classList.toggle('sf6-show-hitboxes', show.value)
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, show.value ? '1' : '0')
  }
  catch {
    // ignore
  }
}

function scanHitboxes() {
  const imgs = document.querySelectorAll('.vp-doc img[src*="hitbox" i], .vp-doc img[src*="_hitbox"]')
  visible.value = imgs.length > 0
}

function onToggle() {
  show.value = !show.value
  applyClass()
  persist()
}

watch(() => route.path, async () => {
  await nextTick()
  requestAnimationFrame(scanHitboxes)
})

onMounted(() => {
  try {
    show.value = localStorage.getItem(STORAGE_KEY) === '1'
  }
  catch {
    show.value = false
  }
  applyClass()
  scanHitboxes()
  const obs = new MutationObserver(() => scanHitboxes())
  obs.observe(document.body, { childList: true, subtree: true })
  onUnmounted(() => obs.disconnect())
})

const label = computed(() => (show.value ? 'Hitbox' : 'Move'))
</script>

<template>
  <div
    v-if="visible"
    class="sf6-hitbox-toggle"
    role="group"
    aria-label="Hitbox images"
  >
    <span class="sf6-hitbox-toggle__label">{{ label }}</span>
    <button
      type="button"
      class="sf6-hitbox-toggle__switch"
      role="switch"
      :aria-checked="show"
      :title="show ? 'Show move images' : 'Show hitbox images'"
      @click="onToggle"
    >
      <span class="sf6-hitbox-toggle__knob" />
    </button>
  </div>
</template>

<style scoped>
/* Match VPSwitch / VPSwitchAppearance chrome */
.sf6-hitbox-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border: none;
  background: transparent;
  padding: 0;
}

.sf6-hitbox-toggle__label {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  white-space: nowrap;
}

.sf6-hitbox-toggle__switch {
  position: relative;
  display: block;
  width: 40px;
  height: 22px;
  padding: 0;
  flex-shrink: 0;
  border-radius: 11px;
  border: 1px solid var(--vp-input-border-color);
  background-color: var(--vp-input-switch-bg-color);
  cursor: pointer;
  transition: border-color 0.25s;
}

.sf6-hitbox-toggle__switch:hover {
  border-color: var(--vp-c-brand-1);
}

.sf6-hitbox-toggle__switch[aria-checked='true'] {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.sf6-hitbox-toggle__knob {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--vp-c-neutral-inverse);
  box-shadow: var(--vp-shadow-1);
  transition: transform 0.25s;
}

.sf6-hitbox-toggle__switch[aria-checked='true'] .sf6-hitbox-toggle__knob {
  transform: translateX(18px);
}
</style>
