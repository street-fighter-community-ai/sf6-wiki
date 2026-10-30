---
title: Contexto de treino
description: stage, playback, Drive/Super e throw tech — campos training do YAML.
---

# Contexto de treino

Campos `training:` do YAML viram `training_settings` no JSON. Escolhas ruins = drill “certo” no papel e inútil no jogo.

## Stage

| YAML | Uso |
|------|-----|
| `center` | Midscreen, footsies, anti-air neutro |
| `left_corner` / `right_corner` | Oki de canto, wall splat carry, strings de corner |

Regra: se a tag for `corner` ou o combo for “corner only”, use corner. Senão `center`.

## Playback

| YAML | Modo | Ideal para |
|------|------|------------|
| `loop` | Repete o mesmo slot | Lab de um único timing |
| `random` | Sorteia por `weight` | Mix / defesa / adivinhar ender |
| `sequential` | Cicla slots em ordem | Curso guiado (A → B → C) |

Defesa vs pressão do oponente → quase sempre **`random`** + vários slots.

## Gauges

| Campo | Valores | Notas |
|-------|---------|-------|
| `player_drive` / `dummy_drive` | `full`, `empty`, número | `full` = 60000 no JSON |
| `player_super` / `dummy_super` | idem | |

Sugestões:

| Objetivo | Dummy Drive | Player Drive |
|----------|-------------|--------------|
| Blockstring / chip | `full` | `full` |
| Burnout / resource steal | `empty` ou baixo | `full` |
| Treinar OD caro | `full` | parcial se quiser escassez |
| Poison / install routes (A.K.I.) | conforme a rota | documentar em `description` |

## Throw tech

`throw_escape` — número do menu do Training Mode (default do compilador: `1` ≈ Inactive).

- Tick throw drills: dummy **sem** tech automática (senão o throw nunca pega).
- Anti-throw / shimmy: pode habilitar tech se o mod/menu expuser o valor; documente o valor usado em `description`.

## Campos mínimos recomendados

```yaml
training:
  stage: left_corner
  playback: random
  player_drive: full
  dummy_drive: full
  player_super: full
  dummy_super: full
```

## Checklist rápido

- [ ] Stage combina com tags (`corner` / `midscreen`)
- [ ] `random` se houver mix de slots
- [ ] Gauges coerentes com OD/Drive Rush da sequência
- [ ] `description` diz o que o **jogador humano** deve praticar (DI? mash? block delay?)
