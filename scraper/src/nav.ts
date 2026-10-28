import type { CharacterRef } from './types.js'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const PAGE_KEYS = [
  ['overview', 'Overview'],
  ['moves', 'Moves'],
  ['frame-data', 'Frame Data'],
  ['combos', 'Combos'],
  ['strategy', 'Strategy'],
  ['matchups', 'Matchups'],
  ['resources', 'Resources'],
] as const

export async function updateVitePressNav(docsRoot: string, _chars: CharacterRef[]): Promise<void> {
  await refreshNavFromDisk(docsRoot)
}

export async function refreshNavFromDisk(docsRoot: string): Promise<void> {
  const charsRoot = join(docsRoot, 'characters')
  let slugs: string[] = []
  try {
    const entries = await readdir(charsRoot, { withFileTypes: true })
    slugs = entries.filter(e => e.isDirectory()).map(e => e.name).sort()
  }
  catch {
    slugs = []
  }

  const sidebar = [
    {
      text: 'Mods',
      items: [
        { text: 'Overview', link: '/mods/' },
        { text: 'Drill Format', link: '/mods/drill-format' },
        { text: 'Como montar o JSON', link: '/mods/montar-json' },
      ],
    },
    {
      text: 'Characters',
      items: slugs.map(slug => ({
        text: titleCaseSlug(slug),
        collapsed: true,
        items: PAGE_KEYS.map(([file, label]) => ({
          text: label,
          link: `/characters/${slug}/${file}`,
        })),
      })),
    },
  ]

  const configPath = join(docsRoot, '.vitepress', 'config.ts')
  let existing = ''
  try {
    existing = await readFile(configPath, 'utf8')
  }
  catch {
    existing = ''
  }

  const sidebarJson = JSON.stringify(sidebar, null, 2)
  const next = existing.includes('/* AUTO-SIDEBAR */')
    ? existing.replace(
        /\/\* AUTO-SIDEBAR \*\/[\s\S]*?\/\* END-AUTO-SIDEBAR \*\/,?/,
        `/* AUTO-SIDEBAR */\n${sidebarJson}\n/* END-AUTO-SIDEBAR */,`,
      )
    : buildConfig(sidebarJson)

  await writeFile(configPath, next, 'utf8')
  console.log(`  updated VitePress sidebar (${slugs.length} characters)`)
}

function titleCaseSlug(slug: string): string {
  return slug
    .split('-')
    .map((p) => {
      if (/^[a-z]\./i.test(p))
        return p.toUpperCase()
      return p.charAt(0).toUpperCase() + p.slice(1)
    })
    .join(' ')
    .replace(/\bA\.k\.i\b/i, 'A.K.I.')
    .replace(/\bJp\b/, 'JP')
    .replace(/\bC\. Viper\b/i, 'C. Viper')
}

function buildConfig(sidebarJson: string): string {
  return `import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  title: 'SF6 Wiki',
  description: 'Street Fighter 6 character data from SuperCombo Wiki',
  base,
  appearance: 'dark',
  cleanUrls: true,
  // Wiki notation (./lvl.2, ./2, etc.) is not a real site route
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mods', link: '/mods/' },
      { text: 'Characters', link: '/characters/ryu/overview' },
    ],
    sidebar: /* AUTO-SIDEBAR */
${sidebarJson}
/* END-AUTO-SIDEBAR */,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/street-fighter-community-ai/sf6-wiki' },
    ],
    footer: {
      message: 'Fan project. Frame data & strategy content sourced from SuperCombo Wiki.',
      copyright: 'Street Fighter is a trademark of Capcom. Not affiliated with Capcom.',
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#0b0b0f' }],
  ],
})
`
}
