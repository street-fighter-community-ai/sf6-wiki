---
title: Como montar o JSON do drill
description: Guia campo a campo do JSON canônico (schema v1) — chaves, valores válidos e como montar raw_inputs.
---

# Como montar o JSON do drill

Guia passo a passo do **JSON canônico** (schema `version: 1`). Use este documento para gerar ou revisar drills à mão / com IA. O empacotamento `SF6DRILL:v2:` está em [Formato de Drill](/mods/drill-format).

Ordem sugerida ao montar:

1. Raiz + `metadata`
2. `compatibility` (personagem do boneco)
3. `training_settings` (opcional)
4. `action_record.global_settings` + `playback_mode`
5. `slots` com `raw_inputs`
6. `reversal_slots` (defaults se não usar wake-up/guard reverse)

---

## Visão geral da árvore

```json
{
  "version": 1,
  "metadata": { "...": "..." },
  "compatibility": { "...": "..." },
  "training_settings": { "...": "..." },
  "action_record": {
    "global_settings": { "...": "..." },
    "playback_mode": 0,
    "reversal_slots": { "damage": [], "down": [], "guard": [] },
    "slots": [ { "...": "..." } ]
  }
}
```

| Chave raiz | Obrigatória? | Papel |
|------------|--------------|--------|
| `version` | **sim** | Sempre `1` (versão do **schema**, não do codec) |
| `metadata` | **sim** | Título, autor, tags, descrição |
| `compatibility` | **sim** | Quem é o boneco (P2); bloqueia apply se ID errado |
| `training_settings` | não | Posição no stage, gauges, guard/stance do dummy |
| `action_record` | **sim** | Recordings + modo de playback + reversals |

---

## 1. `version`

| Valor | Significado |
|-------|-------------|
| `1` | Única versão de schema suportada hoje |

```json
"version": 1
```

Não confundir com `SF6DRILL:v2:` — isso é **codec** de clipboard.

---

## 2. `metadata`

Objeto com informações de biblioteca / compartilhamento. Só `title` é validado como obrigatório pelo mod; os outros são fortemente recomendados para IA e UI.

### `metadata.id`

| Tipo | Valores | Notas |
|------|---------|--------|
| `string` | UUID v4 | Identificador estável. Ex.: `"ba161478-82c5-4824-90ab-0a1c52004e91"` |

Gere um UUID novo para cada drill. Não reutilize IDs ao clonar e alterar conteúdo.

### `metadata.title`

| Tipo | Valores | Notas |
|------|---------|--------|
| `string` | qualquer texto não-vazio | **Obrigatório.** Nome curto na lista do mod |

```json
"title": "Neutral Footsies — Walk / cr.MK / st.HP"
```

### `metadata.author`

| Tipo | Valores | Notas |
|------|---------|--------|
| `string` | nome livre | Quem criou (humano, MCP, `"AI"`, etc.) |

### `metadata.created_at`

| Tipo | Valores | Notas |
|------|---------|--------|
| `string` | ISO-8601 UTC | Preferir `YYYY-MM-DDTHH:mm:ss.sssZ` |

```json
"created_at": "2026-10-28T17:00:00.000Z"
```

### `metadata.tags`

| Tipo | Valores | Notas |
|------|---------|--------|
| `string[]` | tags livres | Facilita busca: `"footsies"`, `"okizeme"`, `"anti-air"` |

```json
"tags": ["footsies", "whiff-punish", "beginner"]
```

### `metadata.description`

| Tipo | Valores | Notas |
|------|---------|--------|
| `string` | texto longo | Setup, o que o boneco faz, objetivo do treino |

Bom conteúdo para a IA (e para o jogador):

- Posição inicial / gauges
- Lista do que cada slot faz
- Goal (“punish whiffs”, “block string gaps”, …)

### Exemplo completo de `metadata`

```json
"metadata": {
  "id": "3f2a1c90-8b4e-4d2a-9f11-0c1a2b3d4e5f",
  "title": "Ryu footsies — walk in / cr.MK / st.HP",
  "author": "MCP",
  "created_at": "2026-10-28T17:00:00.000Z",
  "tags": ["footsies", "ryu"],
  "description": "Boneco em Center. Slots em Random: walk forward/back, poke cr.MK e st.HP, depois crouch block. Treine whiff punish e spacing."
}
```

---

## 3. `compatibility`

Define **com qual personagem** o drill foi feito. No apply, o mod **recusa** se o dummy atual ≠ `dummy_character_id`.

### `compatibility.dummy_character_id`

| Tipo | Obrigatório | Valores |
|------|-------------|---------|
| `number` | **sim** | ID interno SF6 (tabela abaixo) |

### `compatibility.dummy_character_name`

| Tipo | Obrigatório | Valores |
|------|-------------|---------|
| `string` | recomendado | Nome legível alinhado ao ID (ex. `"Ryu"`) |

### `compatibility.player_character_id`

| Tipo | Obrigatório | Valores |
|------|-------------|---------|
| `number` ou `null` | não | Restringe P1; omita ou `null` se o drill serve para qualquer P1 |

### Tabela de IDs (Season 3 / Year 4)

| ID | Nome | ID | Nome |
|----|------|----|------|
| 1 | Ryu | 18 | Guile |
| 2 | Luke | 19 | Ed |
| 3 | Kimberly | 20 | E. Honda |
| 4 | Chun-Li | 21 | Jamie |
| 5 | Manon | 22 | Akuma |
| 6 | Zangief | 25 | Sagat |
| 7 | JP | 26 | M. Bison |
| 8 | Dhalsim | 27 | Terry |
| 9 | Cammy | 28 | Mai |
| 10 | Ken | 29 | Elena |
| 11 | Dee Jay | 30 | C.Viper |
| 12 | Lily | 31 | Alex |
| 13 | A.K.I. | 32 | Ingrid |
| 14 | Rashid | 33 | Yasmin |
| 15 | Blanka | | |
| 16 | Juri | | |
| 17 | Marisa | | |

```json
"compatibility": {
  "dummy_character_id": 1,
  "dummy_character_name": "Ryu",
  "player_character_id": null
}
```

::: tip
Nome e ID devem bater. Se a página do wiki for Ryu, use `1` / `"Ryu"`.
:::

---

## 4. `training_settings`

Todos os campos são **opcionais**. Controlam o menu de Training Mode no restore. Omita o objeto inteiro se não precisar.

### `stage_position`

| Valor (string) | Significado |
|----------------|-------------|
| `"Center"` | Meio do stage |
| `"Left Corner"` | Canto esquerdo |
| `"Right Corner"` | Canto direito |

### Gauges

| Chave | Tipo | Significado | Exemplo |
|-------|------|-------------|---------|
| `player_drive_gauge` | number | Drive do P1 | `60000` = cheio |
| `dummy_drive_gauge` | number | Drive do boneco | `60000` |
| `player_super_gauge` | number | Super do P1 | `0` … cheio (escala do jogo) |
| `dummy_super_gauge` | number | Super do boneco | `0` |

A escala exata de “cheio” vem do jogo; drills capturados usam com frequência `60000` para Drive cheio.

### `dummy_stance`

Postura inicial do boneco:

| Valor | Nome |
|-------|------|
| `0` | Stand |
| `1` | Crouch |
| `2` | Jump |

### `dummy_guard`

| Valor | Nome |
|-------|------|
| `0` | None (não bloqueia) |
| `1` | All Guard |
| `2` | Random |
| `3` | Auto |

### `dummy_guard_switch`

Timing de troca de guard (menu Guard Switch):

| Valor | Nome |
|-------|------|
| `0` | Off |
| `1` | Switch 1 |
| `2` | Switch 2 |
| `3` | Switch 3 |
| `4` | Switch 4 |

### `block_count` / `switch_block_active`

| Chave | Tipo | Significado |
|-------|------|-------------|
| `block_count` | number | Quantos hits / contagem relacionada ao switch block |
| `switch_block_active` | bool ou number | Se o switch block está ativo |

Use os valores capturados do jogo se não tiver certeza; para drills de recording puro, muitas vezes ficam em `0` / `false`.

### `block_type`

Tipo de “block” quando o dummy está bloqueando:

| Valor | Nome |
|-------|------|
| `0` | Block normal |
| `1` | Drive Parry |
| `2` | Perfect Parry |
| `3` | Random entre os acima |

### Drive Reversal

| Chave | Valores | Significado |
|-------|---------|-------------|
| `drive_reversal` | `0` Inactive, `1` Active | Dummy faz Drive Reversal após block |
| `drive_reversal_delay` | number | Delay em frames (só relevante se Active) |
| `drive_reversal_count` | number | Quantas vezes / contagem |

### `throw_escape`

| Valor | Nome |
|-------|------|
| `0` | Active (techa throws) |
| `1` | Inactive |
| `2` | Random |

### `dummy_recovery`

| Valor | Nome |
|-------|------|
| `0` | Recover in Place |
| `1` | Recover Backward |
| `2` | Random |

### Counter hit

| Chave | Valores |
|-------|---------|
| `dummy_counter` | `0` Off, `1` Counter Hit, `2` Punish Counter |
| `dummy_counter_nc` | number (sub-opção normal counter; se presente no capture) |
| `dummy_counter_pc` | number (sub-opção punish counter) |

### Exemplo mínimo útil

```json
"training_settings": {
  "stage_position": "Center",
  "player_drive_gauge": 60000,
  "dummy_drive_gauge": 60000,
  "player_super_gauge": 0,
  "dummy_super_gauge": 0,
  "dummy_stance": 0,
  "dummy_guard": 0,
  "throw_escape": 1,
  "dummy_recovery": 0,
  "dummy_counter": 0
}
```

Para treinar **só** recordings (boneco “morto” em inputs), deixe guard/stance em Stand + None e foque nos `slots`.

---

## 5. `action_record`

Núcleo do drill: o que o jogo grava nos **Action Record / Recording slots**.

```json
"action_record": {
  "global_settings": { },
  "playback_mode": 0,
  "reversal_slots": { "damage": [], "down": [], "guard": [] },
  "slots": []
}
```

### 5.1 `playback_mode`

Como os slots ativos são escolhidos no treino:

| Valor | Nome | Quando usar |
|-------|------|-------------|
| `0` | Loop | Repete o mesmo slot (ou ciclo contínuo) |
| `1` | Random | Escolhe entre slots ativos (usa `weight`) |
| `2` | Sequential | Toca os slots em ordem |

**Alinhe** com `global_settings.play_type` (mesmo número). Footsies com várias opções → `1` (Random).

### 5.2 `global_settings`

Espelha `TM_RecordSetting` nativo. Valores típicos de drills de replay:

| Chave | Tipo | Valor típico | Significado prático |
|-------|------|--------------|---------------------|
| `record_type` | number | `1` | Tipo de recording nativo |
| `record_start_type` | number | `0` ou `1` | Como o record inicia |
| `record_countdown` | number | `0` | Countdown antes de gravar/tocar |
| `play_type` | number | `0` / `1` / `2` | **Mesmo enum que `playback_mode`** |
| `info_type` | number | `2` | Display/info do record (valor visto em captures) |
| `loop_type` | number | `1` | Comportamento de loop nativo |

```json
"global_settings": {
  "info_type": 2,
  "loop_type": 1,
  "play_type": 1,
  "record_countdown": 0,
  "record_start_type": 0,
  "record_type": 1
}
```

::: warning
Enums nativos além de `play_type` / `playback_mode` não estão 100% documentados no mod. Para drills gerados, copie o bloco típico acima e mude só `play_type` (+ `playback_mode`).
:::

### 5.3 `reversal_slots`

Três listas: o que o boneco faz em **wake-up (down)**, **após guard** e **após damage**.

| Chave | Momento |
|-------|---------|
| `down` | Ao levantar |
| `guard` | Após bloquear |
| `damage` | Após tomar hit |

Cada lista tem até **10** entradas. Entrada **desligada** (default):

| Chave | Valor default | Significado |
|-------|---------------|-------------|
| `Type` | `-1` | Sem skill / tipo inválido |
| `SkillIndex` | `-1` | Sem skill |
| `IsValid` | `false` | Entrada inválida |
| `IsActive` | `false` | Não ativa |
| `IsFrame` | `false` | Não amarra a frame específica |
| `Frame` | `0` | Frame (se `IsFrame`) |
| `Delay` | `0` | Delay |
| `Count` | `1` | Contagem |
| `Level` | `0` | Nível / intensidade |

```json
"reversal_slots": {
  "damage": [
    {
      "Type": -1,
      "SkillIndex": -1,
      "IsValid": false,
      "IsActive": false,
      "IsFrame": false,
      "Frame": 0,
      "Delay": 0,
      "Count": 1,
      "Level": 0
    }
  ],
  "down": [],
  "guard": []
}
```

Para drills **só de recording**, pode enviar arrays vazios ou 10× o default. Não invente `SkillIndex` sem capture do jogo — IDs de skill são internos.

### 5.4 `slots` — um recording

Máximo **8** slots (`slot_index` de `1` a `8`).

#### Campos do slot

| Chave | Tipo | Valores / regra | Explicação |
|-------|------|-----------------|------------|
| `slot_index` | number | `1`…`8` | Número do slot no Training Mode |
| `cmd_type` | number | geralmente `0` | Campo nativo `InputData.cmd_type` |
| `is_active` | bool | `true` / `false` | Entra no Random/Loop/Sequential |
| `is_loop` | bool | geralmente `false` | Loop interno do InputData |
| `is_valid` | bool | `true` se tem conteúdo | Slot “válido” no jogo |
| `negative_edge` | bool | geralmente `false` | Negative edge nativo |
| `state` | number | `1` em slots gravados; `0` vazio | Estado do InputData |
| `weight` | number | ≥ `1` | Peso no Random (maior = mais frequente) |
| `frame_count` | number | = `raw_inputs.length` | Duração em frames (60 FPS) |
| `raw_inputs` | `number[]` | bitmasks UInt16 | **Um inteiro por frame** |
| `title` | object | GUID nativo | Título do slot; use zeros se não tiver |

#### Slot vazio (placeholder)

```json
{
  "slot_index": 4,
  "cmd_type": 0,
  "is_active": false,
  "is_loop": false,
  "is_valid": false,
  "negative_edge": false,
  "state": 0,
  "weight": 1,
  "frame_count": 0,
  "raw_inputs": [],
  "title": {
    "mData1": 0, "mData2": 0, "mData3": 0,
    "mData4_0": 0, "mData4_1": 0, "mData4_2": 0, "mData4_3": 0,
    "mData4_4": 0, "mData4_5": 0, "mData4_6": 0, "mData4_7": 0
  }
}
```

#### Slot ativo mínimo

```json
{
  "slot_index": 3,
  "cmd_type": 0,
  "is_active": true,
  "is_loop": false,
  "is_valid": true,
  "negative_edge": false,
  "state": 1,
  "weight": 1,
  "frame_count": 16,
  "raw_inputs": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
  "title": {
    "mData1": 0, "mData2": 0, "mData3": 0,
    "mData4_0": 0, "mData4_1": 0, "mData4_2": 0, "mData4_3": 0,
    "mData4_4": 0, "mData4_5": 0, "mData4_6": 0, "mData4_7": 0
  }
}
```

Aqui: 16 frames andando **forward** (máscara `8`).

#### `title` (GUID)

Não é texto legível — é o GUID nativo do título do slot. Para drills gerados:

- Preencha **todos os campos com `0`**, **ou**
- Use o GUID default do jogo (visto em captures):

```json
{
  "mData1": 231974219,
  "mData2": 56247,
  "mData3": 18493,
  "mData4_0": 138,
  "mData4_1": 211,
  "mData4_2": 88,
  "mData4_3": 121,
  "mData4_4": 158,
  "mData4_5": 17,
  "mData4_6": 216,
  "mData4_7": 197
}
```

Zeros bastam na prática para apply.

---

## 6. Montando `raw_inputs` (o coração do drill)

Cada elemento = **um frame** a 60 FPS. Valor = bitmask `UInt16`:

```
máscara = flags_de_direção | flags_de_botão
```

### Direção

| Bit | Valor decimal | Hex | Significado |
|-----|---------------|-----|-------------|
| 0 | 1 | `0x0001` | Up |
| 1 | 2 | `0x0002` | Down |
| 2 | 4 | `0x0004` | Back |
| 3 | 8 | `0x0008` | Forward |

| Máscara | Inputs | Uso |
|---------|--------|-----|
| `0` | neutro | Stand / idle |
| `8` | Forward | Walk forward |
| `4` | Back | Walk back |
| `2` | Down | Crouch |
| `6` | Down+Back | **Crouch block** (muito usado em recovery) |
| `5` | Up+Back | Jump back |
| `9` | Up+Forward | Jump forward |
| `1` | Up | Jump vertical |
| `10` | Down+Forward | Crouch forward (raro em drills) |

### Botões

| Bit | Valor | Botão |
|-----|-------|-------|
| 4 | 16 (`0x10`) | LP |
| 5 | 32 (`0x20`) | MP |
| 6 | 64 (`0x40`) | HP |
| 7 | 128 (`0x80`) | LK |
| 8 | 256 (`0x100`) | MK |
| 9 | 512 (`0x200`) | HK |

::: danger
Não use a tabela `constants.BTN` do Lua do mod para gerar máscaras — ela está marcada TODO e **não** corresponde aos drills reais. Use esta seção.
:::

### Como calcular um golpe

1. Pegue a direção necessária (neutro = `0`, crouch = `2`, …).
2. OR com o botão.
3. Segure 1–3 frames (captures reais costumam usar **2**).
4. Preencha o resto com crouch block (`6`) ou neutro (`0`).

Exemplos:

| Ação | Cálculo | Máscara |
|------|---------|---------|
| st.HP | `0 \| 64` | `64` |
| cr.MK | `2 \| 256` | `258` |
| st.LP | `0 \| 16` | `16` |
| cr.LP | `2 \| 16` | `18` |
| st.MK | `0 \| 256` | `256` |

### Receita: walk → ataque → block

**Walk forward 9f → cr.MK 2f → crouch block 30f:**

```text
9 × 8     = walk forward
2 × 258   = down + MK
30 × 6    = crouch block
```

```json
"raw_inputs": [
  8, 8, 8, 8, 8, 8, 8, 8, 8,
  258, 258,
  6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
  6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
  6, 6, 6, 6, 6, 6, 6, 6, 6, 6
]
```

`frame_count` **deve** ser `41` (= length do array).

### Receita: só movimento

Walk forward 16f:

```json
"raw_inputs": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
```

Walk back 9f → crouch block 12f:

```json
"raw_inputs": [4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
```

### DI / Parry / especiais com motion

Especiais (Hadoken, Shoryu, etc.) precisam da **sequência de direções frame a frame** + botão no frame certo — o recording não “sabe” o nome do move. Prefira:

1. Capturar no jogo e exportar, ou
2. Montar a motion conhecida (ex. `2,3,6` + botão) com timings calibrados no frame data.

Bits de DI/Parry acima de `0x200` existem no buffer nativo, mas **não** estão validados aqui — confirme com um capture antes de gerar.

---

## 7. Passo a passo resumido (IA / humano)

1. Escolha o boneco → preencha `compatibility`.
2. Escreva `metadata.title` + `description` clara (o que cada slot faz).
3. Defina `playback_mode` e `play_type` (`0`/`1`/`2`).
4. Para cada comportamento do boneco, crie um slot:
   - Monte a sequência de máscaras.
   - `frame_count = len(raw_inputs)`.
   - `is_active` / `is_valid` = `true`, `state` = `1`, `weight` ≥ 1.
5. Preencha gauges/`stage_position` se importar.
6. Deixe `reversal_slots` no default se não for okizeme/reversal.
7. Valide mentalmente: dummy ID certo? títulos/descrição batem com os slots? máscaras usam a tabela da §6?

Entregue o JSON como arquivo `.json` ou cole na Import do mod (string começando com `{`). Codec v2 é opcional — ver [Formato de Drill](/mods/drill-format#6-gerar-drills-a-partir-de-um-mcp--ia).

---

## 8. Exemplo completo anotado

Drill Random com 3 slots: walk forward, walk back → block, walk → cr.MK → block. Boneco Ryu.

```json
{
  "version": 1,
  "metadata": {
    "id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    "title": "Ryu — walk / block / cr.MK",
    "author": "docs",
    "created_at": "2026-10-28T17:00:00.000Z",
    "tags": ["footsies", "example"],
    "description": "Slot1: walk forward 16f. Slot2: walk back 9f + crouch block 12f. Slot3: walk 9f + cr.MK 2f + crouch block 30f. Playback Random."
  },
  "compatibility": {
    "dummy_character_id": 1,
    "dummy_character_name": "Ryu"
  },
  "training_settings": {
    "stage_position": "Center",
    "player_drive_gauge": 60000,
    "dummy_drive_gauge": 60000,
    "player_super_gauge": 0,
    "dummy_super_gauge": 0,
    "dummy_stance": 0,
    "dummy_guard": 0
  },
  "action_record": {
    "global_settings": {
      "info_type": 2,
      "loop_type": 1,
      "play_type": 1,
      "record_countdown": 0,
      "record_start_type": 0,
      "record_type": 1
    },
    "playback_mode": 1,
    "reversal_slots": {
      "damage": [],
      "down": [],
      "guard": []
    },
    "slots": [
      {
        "slot_index": 1,
        "cmd_type": 0,
        "is_active": true,
        "is_loop": false,
        "is_valid": true,
        "negative_edge": false,
        "state": 1,
        "weight": 1,
        "frame_count": 16,
        "raw_inputs": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        "title": {
          "mData1": 0, "mData2": 0, "mData3": 0,
          "mData4_0": 0, "mData4_1": 0, "mData4_2": 0, "mData4_3": 0,
          "mData4_4": 0, "mData4_5": 0, "mData4_6": 0, "mData4_7": 0
        }
      },
      {
        "slot_index": 2,
        "cmd_type": 0,
        "is_active": true,
        "is_loop": false,
        "is_valid": true,
        "negative_edge": false,
        "state": 1,
        "weight": 1,
        "frame_count": 21,
        "raw_inputs": [4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        "title": {
          "mData1": 0, "mData2": 0, "mData3": 0,
          "mData4_0": 0, "mData4_1": 0, "mData4_2": 0, "mData4_3": 0,
          "mData4_4": 0, "mData4_5": 0, "mData4_6": 0, "mData4_7": 0
        }
      },
      {
        "slot_index": 3,
        "cmd_type": 0,
        "is_active": true,
        "is_loop": false,
        "is_valid": true,
        "negative_edge": false,
        "state": 1,
        "weight": 2,
        "frame_count": 41,
        "raw_inputs": [
          8, 8, 8, 8, 8, 8, 8, 8, 8,
          258, 258,
          6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
          6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
          6, 6, 6, 6, 6, 6, 6, 6, 6, 6
        ],
        "title": {
          "mData1": 0, "mData2": 0, "mData3": 0,
          "mData4_0": 0, "mData4_1": 0, "mData4_2": 0, "mData4_3": 0,
          "mData4_4": 0, "mData4_5": 0, "mData4_6": 0, "mData4_7": 0
        }
      }
    ]
  }
}
```

Notas do exemplo:

- `playback_mode` e `play_type` = `1` → Random.
- Slot 3 tem `weight: 2` → aparece ~2× mais que os outros no Random.
- `258` = Down (`2`) + MK (`256`).
- Não há slots 4–8; o mod trata ausentes como vazios no apply / codec.

---

## Ver também

- [Formato de Drill](/mods/drill-format) — codec v2, RLE, checklist MCP, APIs do mod
- [Mods](/mods/) — índice
