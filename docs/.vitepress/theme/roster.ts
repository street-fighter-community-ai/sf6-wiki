/** Slug → select-screen icon under /icons/ (committed copies of SF6_*_Icon.png). */
export interface RosterEntry {
  slug: string
  name: string
  icon: string
}

export const ROSTER: RosterEntry[] = [
  { slug: 'a.k.i', name: 'A.K.I.', icon: 'SF6_A.K.I._Icon.png' },
  { slug: 'akuma', name: 'Akuma', icon: 'SF6_Akuma_Icon.png' },
  { slug: 'alex', name: 'Alex', icon: 'SF6_Alex_Icon.png' },
  { slug: 'arjun', name: 'Arjun', icon: 'SF6_Arjun_Icon.png' },
  { slug: 'blanka', name: 'Blanka', icon: 'SF6_Blanka_Icon.png' },
  { slug: 'c.viper', name: 'C. Viper', icon: 'SF6_Cviper_Icon.png' },
  { slug: 'cammy', name: 'Cammy', icon: 'SF6_Cammy_Icon.png' },
  { slug: 'chun-li', name: 'Chun-Li', icon: 'SF6_Chun-Li_Icon.png' },
  { slug: 'dee-jay', name: 'Dee Jay', icon: 'SF6_DeeJay_Icon.png' },
  { slug: 'dhalsim', name: 'Dhalsim', icon: 'SF6_Dhalsim_Icon.png' },
  { slug: 'e.honda', name: 'E. Honda', icon: 'SF6_Ehonda_Icon.png' },
  { slug: 'ed', name: 'Ed', icon: 'SF6_Ed_Icon.png' },
  { slug: 'elena', name: 'Elena', icon: 'SF6_Elena_Icon.png' },
  { slug: 'guile', name: 'Guile', icon: 'SF6_Guile_Icon.png' },
  { slug: 'ingrid', name: 'Ingrid', icon: 'SF6_Ingrid_Icon.png' },
  { slug: 'jamie', name: 'Jamie', icon: 'SF6_Jamie_Icon.png' },
  { slug: 'jp', name: 'JP', icon: 'SF6_JP_Icon.png' },
  { slug: 'juri', name: 'Juri', icon: 'SF6_Juri_Icon.png' },
  { slug: 'ken', name: 'Ken', icon: 'SF6_Ken_Icon.png' },
  { slug: 'kimberly', name: 'Kimberly', icon: 'SF6_Kimberly_Icon.png' },
  { slug: 'lily', name: 'Lily', icon: 'SF6_Lily_Icon.png' },
  { slug: 'luke', name: 'Luke', icon: 'SF6_Luke_Icon.png' },
  { slug: 'm.bison', name: 'M. Bison', icon: 'SF6_Mbison_Icon.png' },
  { slug: 'mai', name: 'Mai', icon: 'SF6_Mai_Icon.png' },
  { slug: 'manon', name: 'Manon', icon: 'SF6_Manon_Icon.png' },
  { slug: 'marisa', name: 'Marisa', icon: 'SF6_Marisa_Icon.png' },
  { slug: 'rashid', name: 'Rashid', icon: 'SF6_Rashid_Icon.png' },
  { slug: 'ryu', name: 'Ryu', icon: 'SF6_Ryu_Icon.png' },
  { slug: 'sagat', name: 'Sagat', icon: 'SF6_Sagat_Icon.png' },
  { slug: 'terry', name: 'Terry', icon: 'SF6_Terry_Icon.png' },
  { slug: 'yasmine', name: 'Yasmine', icon: 'SF6_Yasmine_Icon.png' },
  { slug: 'zangief', name: 'Zangief', icon: 'SF6_Zangief_Icon.png' },
]

export function iconUrl(file: string): string {
  // VitePress base-aware: withBase is available in components via useData().site.base
  return `/icons/${file}`
}

export function findRosterBySlug(slug: string): RosterEntry | undefined {
  return ROSTER.find(r => r.slug === slug)
}
