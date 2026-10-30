---
layout: home
title: SF6 Wiki
hero:
  name: SF6 Wiki
  text: Street Fighter 6 character data
  tagline: Frame data, combos, strategy & matchups scraped from SuperCombo Wiki into a quiet dark docs site.
  actions:
    - theme: brand
      text: IA Training
      link: /ia-training/
    - theme: alt
      text: Characters
      link: /characters/ryu/overview
features:
  - title: IA Training
    details: Contrato, taxonomia, timings e exemplos gold para Gemini (e outros agentes) gerarem YAML de drill.
  - title: Character pages
    details: Overview, moves, frame data, combos, strategy, matchups, and resources for the full SF6 roster.
  - title: Mods & drills
    details: Schema SF6DRILL, YAML legível e Drill Builder no navegador — comece pela seção Mods.
---

<script setup>
import CharacterRoster from './.vitepress/theme/CharacterRoster.vue'
</script>

<ClientOnly>
  <CharacterRoster />
</ClientOnly>

## Attribution

Content is sourced from the [SuperCombo Wiki](https://wiki.supercombo.gg/w/Street_Fighter_6). Character select icons are from the same wiki. This project is not affiliated with Capcom.
