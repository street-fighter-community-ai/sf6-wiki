---
title: Taxonomia de drills
description: Tags, roles e objetivos padronizados para drills gerados por IA.
---

# Taxonomia de drills

Use estas tags em `meta.tags` e, se útil, no `label` de cada slot. Assim humanos e agentes filtram a [biblioteca](/ia-training/biblioteca).

## Role (obrigatório conceitualmente)

Quem a gravação representa no Training Mode:

| Tag | Significado |
|-----|-------------|
| `role:dummy` | Dummy pressiona / ataca (você treina defesa ou anti-air) |
| `role:player` | Você é o ofensor; dummy está passivo/bloqueando (treino de timing ofensivo) |
| `role:both` | Mix aleatório onde às vezes o dummy “joga” opções de mix |

Default recomendado para strings de pressão do oponente: **`role:dummy`**.

## Objetivo (escolha 1 primário)

| Tag | Quando usar |
|-----|-------------|
| `blockstring` | Sequência que deve ser **bloqueada**; treina respeito / DI / mash window |
| `hitconfirm` | Rota que só continua no **hit**; no block deve parar ou ser outra opção |
| `frametrap` | Gap intencional para punir mash |
| `tick_throw` | Normal → delay → throw |
| `oki` | Após knockdown: meaty / throw / shimmy / left-right |
| `meaty` | Ataque que invade frames de wake-up |
| `shimmy` | Walk back + punish throw attempt |
| `anti_air` | Dummy pula; você anti-air |
| `whiff_punish` | Dummy whiffa poke; você pune |
| `drive_steal` | Foco em quebrar / roubar Drive (chip, OD, etc.) |
| `anti_di` | Opções que batem Drive Impact / compensam DI |
| `punish` | Punir unsafe on block (ex.: −4 ou pior) |
| `mixup` | High/low/throw/overhead como slots ponderados |
| `convert` | Confirmar hit em BnB |
| `safe_jump` | Setup de safe jump pós KD |
| `install` | Depende de poison / burn / level / install do personagem |

## Contexto extra (opcional)

| Tag | Notas |
|-----|-------|
| `corner` / `midscreen` | Espelhados em `training.stage` |
| `drive_rush` | Sequência usa DR/PDR (saber das [limitações](/ia-training/limitacoes)) |
| `od` | Usa OD (PP/KK) |
| `sa` | Termina em Super |
| `poison` | A.K.I. / estados semelhantes |
| `beginner` / `intermediate` / `advanced` | Complexidade do treino |

## Exemplo de `meta`

```yaml
meta:
  title: "A.K.I. 5HK blockstring + tick throw"
  author: gemini
  tags:
    - aki
    - role:dummy
    - blockstring
    - tick_throw
    - corner
    - intermediate
  description: |
    Dummy: pressão a partir de 5HK. Slots = BnB confirm, serpent cancel, tick throw.
    Fonte: characters/a.k.i/combos
```

## Pesos (`weight`)

Em `playback: random`, `weight` maior = mais frequente.

| Situação | Sugestão |
|----------|----------|
| Opção “certa” / mais comum | `weight: 2` ou `3` |
| Mix raro (overhead, throw) | `weight: 1` |
| Slot de reset / idle | evitar; use `end_idle` nos defaults |
