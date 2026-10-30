---
title: Taxonomia de drills
description: Tags, roles e objetivos padronizados para drills gerados por IA.
---

# Taxonomia de drills

Use estas tags **somente** em `meta.tags` (e, se útil, no texto do `label`). Assim humanos e agentes filtram a [biblioteca](/ia-training/biblioteca).

::: danger Tags ≠ inputs
`anti_air`, `punish`, `blockstring` descrevem o **objetivo do treino humano**.  
**Não** viram `action: anti_air` / `action: punish` nos `steps`.  
Os `steps` / `sequence` continuam sendo **golpes do dummy** (`236MK~K`, `5HK`, …). Ver [Contrato — Regra #1](/ia-training/contrato#regra-1-ler-antes-de-tudo).
:::

## Role (obrigatório conceitualmente)

Quem a gravação representa no Training Mode:

| Tag | Significado | O que vai nos slots |
|-----|-------------|---------------------|
| `role:dummy` | Dummy pressiona / ataca (você treina defesa ou anti-air) | Ataques do oponente |
| `role:player` | Você é o ofensor; dummy está passivo/bloqueando (lab de timing ofensivo) | Sua rota / BnB |
| `role:both` | Mix aleatório de opções ofensivas do dummy | Variações de ataque do dummy |

Default para “treino defensivo vs X”: **`role:dummy`** + `character: X`.

## Objetivo (escolha 1 primário)

| Tag | Quando usar | Conteúdo típico dos slots |
|-----|-------------|---------------------------|
| `blockstring` | Você pratica block / respeito / DI | String de pressão do dummy |
| `hitconfirm` | Lab de confirm no hit | Rota que só continua no hit |
| `frametrap` | Gap intencional vs mash | Normal → wait → normal do dummy |
| `tick_throw` | Normal → delay → throw | Inputs do ofensor (dummy ou player conforme role) |
| `oki` | Pós-KD: meaty / throw / shimmy | Opções de oki do ofensor |
| `meaty` | Invade frames de wake-up | Meaty do ofensor |
| `shimmy` | Walk back + punish throw | Walk + botão do ofensor |
| `anti_air` | Você pratica AA | **Dummy pula / air move** (não “action anti_air”) |
| `whiff_punish` | Você pune whiff | Dummy whiffa poke (hold/recovery longo) |
| `drive_steal` | Chip / OD / Drive | Ataques que drenam Drive |
| `anti_di` | Vs Drive Impact | Opções que batem / evitam DI |
| `punish` | Você pune unsafe | Dummy faz o golpe **unsafe**; description diz o punish |
| `mixup` | High/low/throw | Enders diferentes em slots separados |
| `convert` | Confirm em BnB | BnB do ofensor |
| `safe_jump` | Setup de safe jump | KD + jump setup do ofensor |
| `install` | Estado especial | Rotas que precisam do install |

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
