<script setup lang="ts">
import { withBase } from 'vitepress'
import { ROSTER } from './roster'

function href(slug: string) {
  return withBase(`/characters/${slug}/overview`)
}

function src(file: string) {
  return withBase(`/icons/${file}`)
}
</script>

<template>
  <section class="sf6-roster" aria-label="Personagens">
    <h2 class="sf6-roster__title">
      Personagens
    </h2>
    <p class="sf6-roster__lede">
      Ícones do select screen — abra o overview de cada lutador.
    </p>
    <ul class="sf6-roster__grid">
      <li v-for="c in ROSTER" :key="c.slug">
        <a class="sf6-roster__card" :href="href(c.slug)">
          <img class="sf6-roster__icon" :src="src(c.icon)" :alt="c.name" width="72" height="72" loading="lazy">
          <span class="sf6-roster__name">{{ c.name }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.sf6-roster {
  margin: 2rem 0 1rem;
  padding: 0 1.5rem;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}

.sf6-roster__title {
  margin: 0 0 0.35rem;
  font-size: 1.35rem;
  font-weight: 650;
  letter-spacing: -0.02em;
}

.sf6-roster__lede {
  margin: 0 0 1.1rem;
  color: var(--text-mute, var(--vp-c-text-2));
  font-size: 0.95rem;
}

.sf6-roster__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5.5rem, 1fr));
  gap: 0.65rem;
}

.sf6-roster__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 0.35rem 0.5rem;
  border: 1px solid var(--border, var(--vp-c-border));
  border-radius: var(--radius-sm, 6px);
  background: var(--bg-elevated, var(--vp-c-bg-alt));
  text-decoration: none;
  color: var(--text, var(--vp-c-text-1));
  transition: border-color 0.15s ease, background 0.15s ease;
}

.sf6-roster__card:hover {
  border-color: var(--accent, var(--vp-c-brand-1));
  background: var(--bg-mute, var(--vp-c-bg-soft));
}

.sf6-roster__icon {
  width: 4.5rem;
  height: 4.5rem;
  object-fit: contain;
  image-rendering: auto;
}

.sf6-roster__name {
  font-size: 0.72rem;
  line-height: 1.2;
  text-align: center;
  color: var(--text-mute, var(--vp-c-text-2));
}

.sf6-roster__card:hover .sf6-roster__name {
  color: var(--text, var(--vp-c-text-1));
}
</style>
