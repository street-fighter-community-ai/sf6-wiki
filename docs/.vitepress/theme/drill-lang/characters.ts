/** Character name / slug → Training Mode dummy id (Season 3 / Year 4). */
export const CHARACTER_IDS: Record<string, number> = {
  ryu: 1,
  luke: 2,
  kimberly: 3,
  'chun-li': 4,
  chunli: 4,
  'chun li': 4,
  manon: 5,
  zangief: 6,
  jp: 7,
  dhalsim: 8,
  cammy: 9,
  ken: 10,
  'dee jay': 11,
  deejay: 11,
  'dee-jay': 11,
  lily: 12,
  'a.k.i.': 13,
  'a.k.i': 13,
  aki: 13,
  rashid: 14,
  blanka: 15,
  juri: 16,
  marisa: 17,
  guile: 18,
  ed: 19,
  'e. honda': 20,
  'e.honda': 20,
  ehonda: 20,
  honda: 20,
  jamie: 21,
  akuma: 22,
  sagat: 25,
  'm. bison': 26,
  'm.bison': 26,
  bison: 26,
  terry: 27,
  mai: 28,
  elena: 29,
  'c.viper': 30,
  'c. viper': 30,
  viper: 30,
  alex: 31,
  ingrid: 32,
  yasmin: 33,
  yasmine: 33,
}

export const CHARACTER_NAMES: Record<number, string> = {
  1: 'Ryu',
  2: 'Luke',
  3: 'Kimberly',
  4: 'Chun-Li',
  5: 'Manon',
  6: 'Zangief',
  7: 'JP',
  8: 'Dhalsim',
  9: 'Cammy',
  10: 'Ken',
  11: 'Dee Jay',
  12: 'Lily',
  13: 'A.K.I.',
  14: 'Rashid',
  15: 'Blanka',
  16: 'Juri',
  17: 'Marisa',
  18: 'Guile',
  19: 'Ed',
  20: 'E. Honda',
  21: 'Jamie',
  22: 'Akuma',
  25: 'Sagat',
  26: 'M. Bison',
  27: 'Terry',
  28: 'Mai',
  29: 'Elena',
  30: 'C.Viper',
  31: 'Alex',
  32: 'Ingrid',
  33: 'Yasmin',
}

export function resolveCharacter(input: string | number): { id: number, name: string } {
  if (typeof input === 'number') {
    const name = CHARACTER_NAMES[input]
    if (!name)
      throw new Error(`Unknown character id: ${input}`)
    return { id: input, name }
  }
  const key = input.trim().toLowerCase()
  const id = CHARACTER_IDS[key]
  if (id == null)
    throw new Error(`Unknown character: ${input}`)
  return { id, name: CHARACTER_NAMES[id]! }
}
