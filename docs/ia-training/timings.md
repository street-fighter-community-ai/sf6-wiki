---
title: Timings
description: Defaults do compilador e pontos de partida de gaps por personagem — calibrar no Training Mode.
---

# Timings

O compilador **não** tem tabela completa de cancel windows por personagem. Os valores abaixo são **pontos de partida** para a IA preencher `defaults:` / `wait:`; o humano deve calibrar no jogo.

## Defaults globais (`sf6-drill/v1`)

| Chave | Default | Quando mudar |
|-------|---------|--------------|
| `button_hold` | `3f` | Botão “sumiu” na gravação → subir para `4f`–`5f` |
| `motion_step` | `2f` | Specials falhando → `3f` |
| `cancel_gap` | `6f` | Cancel cedo demais / tarde demais |
| `link_gap` | `14f` | Links (`5MK, 5MP`) dropando |
| `followup_gap` | `4f` | TC / `~` enders |
| `delay_default` | `3f` | `dl.X` sem número |
| `end_idle` | `24f` | Espaço entre loops do slot |

```yaml
defaults:
  button_hold: 3f
  motion_step: 2f
  cancel_gap: 6f
  link_gap: 14f
  followup_gap: 4f
  end_idle: 24f
```

## Regra para a IA

1. Comece com defaults globais.
2. Se a página Combos/Strategy mencionar delay (`dl.`, “late cancel”, “meaty”), use `steps:` + `wait: Nf`.
3. Links médios (`5MK, 5MP`) muitas vezes precisam `link_gap` **maior** que cancels leves.
4. Nunca afirme frame advantage inventado; se o frame-data do site tiver coluna, cite-a.

## A.K.I. — ponto de partida

Fontes: [Combos](/characters/a.k.i/combos), BnB `5HK > 2PP~K, 2LP > 2LP > 236HP`.

| Situação | Sugestão de gap | Notas |
|----------|-----------------|-------|
| Cancel `5HK > 2PP` | `cancel_gap: 6f`–`8f` | BnB principal |
| `2PP~K` | `followup_gap: 3f`–`4f` | Target combo / follow-up |
| `2LP > 2LP` chain | `cancel_gap: 5f`–`7f` | Terceiro 2LP whiffa far |
| Link `2LP, 5LK` | `link_gap: 12f`–`16f` | Link importante do kit |
| Link `5MK, 5MP` | `link_gap: 14f`–`18f` | 5MP whiffa far |
| `214LP~6P` | `followup_gap: 4f` | Flame/serpent follow-up |
| Tick throw pós 5HK | `wait: 3f`–`5f` depois do normal | Preferir `steps:` |
| Meaty oki pós 236HP | calibrar `wait` no wake-up | Ver [Oki](/ia-training/oki) |

```yaml
# Exemplo: defaults um pouco mais “folgados” para A.K.I. links
defaults:
  cancel_gap: 7f
  link_gap: 15f
  followup_gap: 4f
  end_idle: 28f
```

## Ryu — ponto de partida

| Situação | Sugestão | Notas |
|----------|----------|-------|
| `5MK > 236HP` | `cancel_gap: 6f` | Confirm médio clássico |
| `2MK > 236MP` | `cancel_gap: 6f` | Low confirm |
| `5HP > 623HP` | `cancel_gap: 6f`–`8f` | DP cancel |
| Fireball gap / pressure | slots + `wait` longos | Dummy joga `236HP` em loop |

## Sagat — ponto de partida

| Situação | Sugestão | Notas |
|----------|----------|-------|
| Tiger Nexus / Jinrai steps | `followup_gap: 4f` + slots por ender | Não comprimir tudo numa sequence com `/` |
| Enders mid vs low | slots `weight` separados | Ver taxonomia `mixup` |
| Blockstring longa | `end_idle: 30f`+ | Tempo para o player respirar entre loops |

## Quando forçar `steps:`

- Tick throw / meaty / shimmy
- Frame trap com gap conhecido (“4f gap”)
- Qualquer coisa em que `>` / `,` / `~` defaults falhem no jogo

```yaml
slots:
  - id: 1
    label: Meaty 5HK (calibrar wait)
    tags_note: oki meaty
    steps:
      - move: 236HP          # knockdown starter (exemplo)
      - wait: 40f            # ← calibrar no Training Mode
      - move: 5HK
        hold: 4f
      - wait: 20f
```

## Manutenção

Quando a comunidade validar um timing, atualize esta página e o YAML gold correspondente em [Biblioteca](/ia-training/biblioteca). Não edite Markdown scrapeado de personagem à mão — ver [AGENTS.md](https://github.com/street-fighter-community-ai/sf6-wiki/blob/main/AGENTS.md).
