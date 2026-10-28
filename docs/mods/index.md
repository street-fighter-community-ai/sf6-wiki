---
title: Mods
description: Documentação de mods de Street Fighter 6 usados neste projeto — formatos para IA e ferramentas.
---

# Mods

Esta seção descreve mods / formatos externos que o wiki e futuros agentes de IA usam para **gerar ou consumir dados estruturados** (além do scrape SuperCombo).

## Disponíveis

| Mod / formato | Página | Uso previsto |
|---------------|--------|--------------|
| **SF6 Training Drill Share** — visão geral | [Formato de Drill](/mods/drill-format) | Schema, codec `SF6DRILL:v2:`, checklist MCP |
| **SF6 Training Drill Share** — montar JSON | [Como montar o JSON](/mods/montar-json) | Cada chave/valor + como construir `raw_inputs` |

## Objetivo

Manter uma referência estável (schema, bitmasks, checklist) para que um MCP / agente possa:

1. Ler frame data e estratégia das páginas de personagem.
2. Montar drills de treino válidos no formato do mod.
3. Entregar JSON ou código de clipboard sem adivinhar IDs ou máscaras de input.
