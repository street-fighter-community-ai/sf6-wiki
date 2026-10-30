---
title: Slots vs alternativas
description: Como transformar notação A/B do wiki em slots ponderados no drill YAML.
---

# Slots vs alternativas

Nas páginas de Combos, `2LK/2LP` e `236LP/236HP` significam **escolha**. No Training Mode cada slot grava **uma** sequência. A IA deve **explodir** alternativas em slots.

## Regra

| No wiki | No YAML |
|---------|---------|
| `2LP/5LP > 236HP` | 2 slots (ou mais), um por starter |
| `… > 236MP/236HP` | 2 slots de ender |
| `236LP/236HP` como mix | 2 slots + `weight` |
| Notas “or throw” | slot extra `tick_throw` / `throw` |

**Nunca** deixe a barra `/` dentro de `sequence:` — o compilador não escolhe ramo.

## Exemplo

Wiki:

```text
CH 2MP/5MP, 2PP~K, 2LP > 2LP > 236HP
```

YAML:

```yaml
slots:
  - id: 1
    label: CH 2MP into BnB
    weight: 1
    sequence: "2MP, 2PP~K, 2LP > 2LP > 236HP"

  - id: 2
    label: CH 5MP into BnB
    weight: 1
    sequence: "5MP, 2PP~K, 2LP > 2LP > 236HP"
```

(Contexto CH vai em `label` / `description`.)

## Limite de 8 slots

Se o wiki listar 12 variantes:

1. Agrupe as mais importantes (BnB, unsafe, throw, overhead).
2. Descarte edges “raramente used”.
3. Mencione na `description` o que ficou de fora.

## Pesos

| Tipo | weight |
|------|--------|
| Opção principal de pressão | 2–3 |
| Confirm / BnB | 2 |
| Throw / overhead / rare mix | 1 |

## Parênteses do wiki

`(2LP, 5LK >)` opcional no meio do confirm:

- Slot “curto” sem o link
- Slot “completo” com o link  

Não tente codificar parênteses na `sequence`.
