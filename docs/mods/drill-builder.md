---
title: Drill Builder
description: Converter YAML ↔ JSON de drills SF6 rodando no navegador.
---

# Drill Builder

Ferramenta no navegador: **YAML (`sf6-drill/v1`) ↔ JSON** do SF6 Training Drill Share.

Especificação da linguagem: [Linguagem YAML do drill](/mods/drill-yaml).

<script setup>
import DrillBuilder from '../.vitepress/theme/DrillBuilder.vue'
</script>

<ClientOnly>
  <DrillBuilder />
</ClientOnly>

## Fluxo sugerido

1. Escreva ou cole o YAML (notação `5HK > 214LP~6P`, etc.).
2. **Converter** (modo YAML → JSON).
3. Copie o JSON e importe no mod, ou salve em `reframework/data/sf6_training_share/drills/`.
4. Para inspecionar um JSON capturado no jogo: cole no painel JSON, alterne para **JSON → YAML**, converta.
