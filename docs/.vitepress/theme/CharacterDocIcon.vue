<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { findRosterBySlug } from './roster'

const route = useRoute()

const entry = computed(() => {
  const m = route.path.match(/\/characters\/([^/]+)/)
  if (!m)
    return null
  return findRosterBySlug(decodeURIComponent(m[1]!))
})

const src = computed(() => entry.value ? withBase(`/icons/${entry.value.icon}`) : '')
</script>

<template>
  <div v-if="entry" class="sf6-char-icon">
    <img :src="src" :alt="entry.name" width="64" height="64" loading="lazy">
  </div>
</template>

<style scoped>
.sf6-char-icon {
  margin: 0 0 0.75rem;
}

.sf6-char-icon img {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  border-radius: var(--radius-sm, 6px);
  border: 1px solid var(--border, var(--vp-c-border));
  background: var(--bg-mute, var(--vp-c-bg-soft));
}
</style>
