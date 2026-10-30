---
title: Biblioteca de drills
description: Índice versionado dos YAML gold em /ia-training/examples/.
---

# Biblioteca de drills

Arquivos em `docs/public/ia-training/examples/` — publicados na raiz do site como `/ia-training/examples/<nome>.yml`.

## Catálogo

| ID | Arquivo | Tags principais |
|----|---------|-----------------|
| `aki-5hk-routes` | [aki-5hk-routes.yml](/ia-training/examples/aki-5hk-routes.yml) | `blockstring`, `convert`, `tick_throw`, `corner` |
| `aki-blockstring-5mp` | [aki-blockstring-5mp.yml](/ia-training/examples/aki-blockstring-5mp.yml) | `blockstring`, `frametrap`, `convert` |
| `ryu-hadoken-pressure` | [ryu-hadoken-pressure.yml](/ia-training/examples/ryu-hadoken-pressure.yml) | `blockstring`, `convert`, `beginner` |
| `sagat-tiger-nexus-defense` | [sagat-tiger-nexus-defense.yml](/ia-training/examples/sagat-tiger-nexus-defense.yml) | `blockstring`, `mixup`, `corner` |
| `generic-oki-meaty` | [generic-oki-meaty.yml](/ia-training/examples/generic-oki-meaty.yml) | `oki`, `meaty`, `shimmy`, `advanced` |
| `akuma-demon-flip-defense` | [akuma-demon-flip-defense.yml](/ia-training/examples/akuma-demon-flip-defense.yml) | `role:dummy`, `mixup`, `blockstring`, `anti_air` |

## Convenção de novos arquivos

1. Nome: `{slug}-{objetivo-curto}.yml` (ASCII, kebab-case).
2. `meta.tags` conforme [taxonomia](/ia-training/taxonomia).
3. `description` com fonte (`/characters/...`) e avisos de calibração.
4. Entrada neste índice + linha em [Exemplos gold](/ia-training/exemplos).
5. Validar no [Drill Builder](/mods/drill-builder) (YAML → JSON sem erro).

## Relação com páginas de personagem

Não embutir YAML grande no Markdown **scrapeado** (`docs/characters/**`). A biblioteca fica só em **IA Training**. Links opcionais da Strategy humana podem apontar para cá depois (edit manual em docs não-gerados).
