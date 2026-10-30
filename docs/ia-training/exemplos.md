---
title: Exemplos gold
description: YAML de referência por arquétipo — copie, adapte, cole no Drill Builder.
---

# Exemplos gold

Cada exemplo está versionado em [`/ia-training/examples/*.yml`](/ia-training/examples/aki-5hk-routes.yml) (arquivos estáticos) e resumido abaixo. Fluxo: copiar → [Drill Builder](/mods/drill-builder) → Converter → importar no mod.

## Arquétipos cobertos

| Arquétipo | Arquivo | Personagem |
|-----------|---------|------------|
| Rotas a partir de um normal forte | [aki-5hk-routes.yml](/ia-training/examples/aki-5hk-routes.yml) | A.K.I. |
| Blockstring vs hit-confirm | [aki-blockstring-5mp.yml](/ia-training/examples/aki-blockstring-5mp.yml) | A.K.I. |
| Pressão / confirms clássicos | [ryu-hadoken-pressure.yml](/ia-training/examples/ryu-hadoken-pressure.yml) | Ryu |
| Mix de enders (slots, não `/`) | [sagat-tiger-nexus-defense.yml](/ia-training/examples/sagat-tiger-nexus-defense.yml) | Sagat |
| Template oki meaty/throw/shimmy | [generic-oki-meaty.yml](/ia-training/examples/generic-oki-meaty.yml) | Ryu (template) |
| Defesa vs Demon Flip (dummy ataca) | [akuma-demon-flip-defense.yml](/ia-training/examples/akuma-demon-flip-defense.yml) | Akuma |

## Mini A.K.I. 5HK (referência inline)

```yaml
schema: sf6-drill/v1
meta:
  title: A.K.I. 5HK routes
  tags: [aki, role:dummy, blockstring, convert, tick_throw, corner]
character: A.K.I.
training:
  stage: left_corner
  playback: random
  player_drive: full
  dummy_drive: full
defaults:
  cancel_gap: 7f
  link_gap: 15f
  followup_gap: 4f
slots:
  - id: 1
    label: BnB
    weight: 3
    sequence: "5HK > 2PP~K, 2LP > 2LP > 236HP"
  - id: 2
    label: Serpent cancel
    weight: 2
    sequence: "5HK > 214LP~6P"
  - id: 3
    label: Tick throw
    weight: 1
    steps:
      - move: 5HK
      - wait: 4f
      - move: throw
```

## Como a IA deve usar

1. Escolher o arquétipo mais próximo do pedido do usuário.
2. Trocar `character`, sequences e `training` com dados das páginas Combos/Strategy.
3. Respeitar [contrato](/ia-training/contrato) e [limitações](/ia-training/limitacoes).
4. Não copiar waits de oki sem aviso de calibração.

Índice de arquivos: [Biblioteca](/ia-training/biblioteca).
