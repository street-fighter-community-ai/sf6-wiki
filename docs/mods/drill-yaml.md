---
title: Linguagem YAML do drill (sf6-drill/v1)
description: Notação legível estilo SuperCombo que o site compila para JSON do SF6 Training Drill Share.
---

# Linguagem YAML do drill

Formato humano **`sf6-drill/v1`**: você escreve notação de Street Fighter (como nas páginas de combos) e o [Drill Builder](/mods/drill-builder) no navegador gera o JSON canônico do mod — sem editar `raw_inputs` nem `mData*`.

| Direção | Ferramenta |
|---------|------------|
| YAML → JSON | Compila notação / steps → drill schema v1 |
| JSON → YAML | Decompila `raw_inputs` → steps `hold` / `wait` / `walk` |

Tudo roda **no cliente** (VitePress + Vue). Nada é enviado a servidor.

---

## Princípios

1. **Notação SuperCombo** para a intenção (`5HK > 214LP~6P`).
2. **`raw_inputs` e `title.mData*` nunca aparecem no YAML** — o compilador preenche.
3. Delays de gravação usam **frames** (`4f`, `dl.5f`).
4. Timings default são heurísticos (sem tabela completa de cancel windows por personagem na v1). Ajuste `defaults:` ou use `steps:`.

---

## Documento mínimo

```yaml
schema: sf6-drill/v1

meta:
  title: "Meu drill"

character: Ryu   # nome, slug ou id numérico

slots:
  - sequence: "5HK > 236HP"
```

---

## Campos

### `schema`

Sempre `sf6-drill/v1`.

### `meta`

| Chave | Obrigatória | Notas |
|-------|-------------|--------|
| `title` | sim | Vira `metadata.title` |
| `id` | não | UUID; gerado se omitido |
| `author` | não | |
| `created_at` | não | ISO-8601; gerado se omitido |
| `tags` | não | lista de strings |
| `description` | não | texto longo |

### `character`

Nome (`A.K.I.`, `Akuma`), slug (`a.k.i`, `chun-li`) ou id (`13`, `22`). Resolve `compatibility.dummy_character_id` + nome.

### `training` (opcional)

| Chave | Valores |
|-------|---------|
| `stage` | `center`, `left_corner`, `right_corner` (ou strings do jogo) |
| `playback` | `loop` \| `random` \| `sequential` (ou `0`/`1`/`2`) |
| `player_drive` / `dummy_drive` | `full`, `empty`, ou número (ex. `60000`) |
| `player_super` / `dummy_super` | idem |
| `throw_escape` | número do menu (default `1` = Inactive) |

### `defaults` (opcional)

Usados ao expandir `sequence:`:

| Chave | Default | Significado |
|-------|---------|-------------|
| `button_hold` | `3f` | Frames com o botão pressionado |
| `motion_step` | `2f` | Cada direção de uma motion (`236`, `214`…) |
| `cancel_gap` | `6f` | Espera inserida em `>` |
| `link_gap` | `14f` | Espera inserida em `,` |
| `followup_gap` | `4f` | Espera inserida em `~` |
| `delay_default` | `3f` | Quando `dl.X` sem número de frames |
| `end_idle` | `24f` | Neutro no fim de cada slot |

### `slots[]`

Máximo prático: 8 (limite do Training Mode).

| Chave | Notas |
|-------|--------|
| `id` | `slot_index` (1–8); default = ordem |
| `label` | Só documentação / UI (não vai para GUID nativo) |
| `weight` | Peso no Random (≥ 1) |
| `sequence` | String SuperCombo |
| `steps` | Lista explícita (prioridade se ambos existirem: use um ou outro) |

---

## Notação em `sequence`

Alinhada ao guia da SuperCombo Wiki:

| Símbolo | Significado no compilador |
|---------|---------------------------|
| `>` | Cancel → insere `cancel_gap` |
| `,` | Link → insere `link_gap` |
| `~` | Follow-up / chain → insere `followup_gap` |
| `dl.5f` | Espera 5 frames |
| `dl.2LP` | `delay_default` + move `2LP` |
| `5HK`, `2MP`, `236HP`, `214LP` | Normal / special (numpad + botão) |
| `2PP`, `623PP` | Dois botões (OD / TC starters) |
| `6P`, `6LK` | Direção + botão (enders) |
| `throw` / `LPLK` | Throw neutro |
| `6.throw` | Forward throw |
| `DR` / `PDR` | Heurística de dash (não é Drive Rush perfeito) |
| `66` / `44` | Walk forward / back ~12f |

Exemplos válidos:

```text
5HK > 2PP~K, 2LP > 2LP > 236HP
5HK > 214LP~6P
5MK > DR~5HP
CH 6HP, 5LK > 236LP
```

::: tip
Prefixos como `CH` / `PC` / `AA` **não** mudam inputs (são contexto de hit). Prefira colocá-los em `label` / `description`. Se aparecerem na `sequence`, o compilador pode avisar “unrecognized”.
:::

---

## `steps` explícitos

Quando o gap precisa ser exato (frame trap, shimmy, meaty):

```yaml
steps:
  - walk: 6
    frames: 12f
  - move: 5HK
  - wait: 3f
  - move: 2MP
  - wait: 30f
```

| Step | Campos |
|------|--------|
| `move` | Token (`5HK`, `236MK`, `throw`…) + `hold` opcional |
| `wait` | `4f` ou `4` |
| `walk` | Direção numpad (`6`, `4`, `2`…) + `frames` |
| `hold` | Token ou máscara + `frames` |
| `raw` | Array numérico (escape hatch; evite no YAML “humano”) |

---

## O que o JSON recebe

O compilador preenche:

- `version: 1`, `metadata`, `compatibility`
- `training_settings` básicos
- `action_record` com `playback_mode`, `global_settings`, slots ativos
- Cada slot: `raw_inputs`, `frame_count`, `title` zerado, flags `is_active` / `is_valid`

Detalhes do envelope: [Formato de Drill](/mods/drill-format) e [Como montar o JSON](/mods/montar-json).

---

## Decompile (JSON → YAML)

- Emite `steps` com RLE de máscaras (`hold: 5HK`, `wait: 12f`, `walk: 6`).
- **Não** reconstrói a string `5HK > 236HP` automaticamente.
- `label` vira `Slot N` (o GUID nativo não carrega título legível).

Use decompile para inspecionar / versionar um JSON capturado; refine depois com `sequence:` se quiser.

---

## Exemplo completo

```yaml
schema: sf6-drill/v1

meta:
  title: A.K.I. 5HK routes
  author: sf6-wiki
  tags: [aki, bnb]
  description: |
    BnB e rota 214LP~6P.

character: A.K.I.

training:
  stage: left_corner
  playback: random
  player_drive: full
  dummy_drive: full

defaults:
  button_hold: 3f
  end_idle: 24f

slots:
  - id: 1
    label: BnB
    weight: 2
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

Abra o [Drill Builder](/mods/drill-builder), cole o YAML, clique **Converter**, copie o JSON para o mod.
