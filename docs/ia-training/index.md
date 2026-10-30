---
title: IA Training
description: Guia para agentes de IA (Gemini e outros) lerem este site e gerarem drills YAML válidos para o SF6 Training Drill Share.
---

# IA Training

Esta seção existe para que uma **IA** (Gemini, Claude, Cursor, etc.) leia o wiki e produza um **YAML `sf6-drill/v1`** pronto para o [Drill Builder](/mods/drill-builder) → JSON → mod **SF6 Training Drill Share**.

Não substitui as páginas de personagem: **complementa** com contrato, taxonomia, timings, notação canônica e exemplos gold.

## Fluxo esperado

```text
Pedido do usuário
  → ler contrato + taxonomia + notação
  → ler combos / strategy / frame-data do personagem
  → emitir YAML sf6-drill/v1 (slots, tags, contexto)
  → humano cola no Drill Builder → Converter → importa no jogo
```

## Índice

| Página | Para quê |
|--------|----------|
| [Contrato para a IA](/ia-training/contrato) | Checklist obrigatório / “system prompt” do site |
| [Taxonomia de drills](/ia-training/taxonomia) | Tags, roles, objetivos |
| [Léxico de notação](/ia-training/notacao) | Tokens que o compilador aceita |
| [Timings](/ia-training/timings) | Gaps / defaults por personagem (ponto de partida) |
| [Contexto de treino](/ia-training/contexto) | Stage, Drive, Super, throw tech |
| [Slots vs alternativas](/ia-training/slots) | Como transformar `A/B` do wiki em slots |
| [Oki e advantage](/ia-training/oki) | Meaty, throw, shimmy após KD |
| [Blockstrings](/ia-training/blockstrings) | Safe / unsafe / gaps |
| [Limitações do compilador](/ia-training/limitacoes) | O que **não** inventar |
| [Exemplos gold](/ia-training/exemplos) | YAML de referência por arquétipo |
| [Biblioteca de drills](/ia-training/biblioteca) | Arquivos `.yml` versionados |
| [Drills de matchup](/ia-training/matchups) | Treinos situacionais vs arquétipos |

## Spec técnica

- Linguagem: [Drill YAML](/mods/drill-yaml)
- Schema JSON: [Formato de Drill](/mods/drill-format)
- Ferramenta: [Drill Builder](/mods/drill-builder)
