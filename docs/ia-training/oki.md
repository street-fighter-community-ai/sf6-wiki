---
title: Oki e advantage
description: Como documentar e gerar drills de meaty, throw e shimmy após knockdown.
---

# Oki e advantage

Combos sozinhos não ensinam o **pós-knockdown**. Drills de oki precisam de: KD starter → espera calibrada → opção.

## Anatomia

```text
[knockdown move] → wait (wake-up) → [meaty | throw | shimmy punish | safe jump]
```

No YAML isso quase sempre é `steps:`, não uma `sequence:` com `>` genérico.

## Tags

- `oki`, `meaty`, `shimmy`, `tick_throw`, `safe_jump`
- `role:dummy` se o dummy aplica o KD+oki (você defende)
- `role:player` se você pratica aplicar oki (dummy em wake-up)

## Padrão de slots (mix de oki)

```yaml
meta:
  tags: [oki, meaty, shimmy, tick_throw, role:dummy, corner]

training:
  stage: left_corner
  playback: random

slots:
  - id: 1
    label: Meaty 5HK
    weight: 3
    steps:
      - move: 236HP
      - wait: 42f          # calibrar
      - move: 5HK
        hold: 4f
      - wait: 24f

  - id: 2
    label: Throw on wake-up
    weight: 2
    steps:
      - move: 236HP
      - wait: 45f
      - move: throw
      - wait: 40f

  - id: 3
    label: Shimmy (walk back)
    weight: 1
    steps:
      - move: 236HP
      - wait: 38f
      - walk: 4
        frames: 10f
      - wait: 8f
      - move: 5HK
      - wait: 24f
```

Os `wait:` após o KD são **placeholders** — a IA deve marcar `description: "Calibrar waits no Training Mode"` e, se o Strategy do personagem der frame count de oki, usar esse número.

## O que ler no site

| Página | Procure |
|--------|---------|
| Strategy | safe jump, meaty, okizeme, “after 236HP” |
| Combos | enders que dão KD / soft KD / hard KD |
| Frame data | advantage on hit do ender (se scrapeado) |

## Safe jump

Se a strategy descrever safe jump setup, um slot dedicado:

- tags: `safe_jump`, `oki`
- `steps` com jump (`8` walk/hold) só se o léxico/heurística bastar; senão descreva e use `steps` com waits longos + nota “gravar jump manualmente no mod se necessário”

Jump de verdade ainda é área frágil do compilador — ver [limitações](/ia-training/limitacoes).
