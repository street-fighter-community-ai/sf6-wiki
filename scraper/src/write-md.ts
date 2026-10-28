import type {
  CharacterRef,
  CombosData,
  FrameDataResult,
  MarkdownTable,
  MatchupsData,
  MoveEntry,
  MovesData,
  OverviewData,
  ResourcesData,
  StrategyData,
} from './types.js'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { preferOriginalImageUrl } from './mediawiki.js'
import { escapeMdProse, renderMarkdownTable } from './parse/html.js'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function renderHtmlTable(table: MarkdownTable): string {
  const head = table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')
  const body = table.rows
    .map(row => `<tr>${row.map(c => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`)
    .join('')
  return `<div class="sf6-move__table-wrap"><table class="sf6-move__table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`
}

/** SuperCombo-style two-column move card (image | frame data + notes). */
function renderMoveCard(move: MoveEntry): string {
  const title = escapeHtml(move.displayName || move.name)
  const notation = escapeHtml(move.name)
  const inputBits: string[] = []
  if (move.classicInput)
    inputBits.push(`<span class="sf6-move__input"><span class="sf6-move__input-label">Classic</span> <code>${escapeHtml(move.classicInput)}</code></span>`)
  if (move.modernInput)
    inputBits.push(`<span class="sf6-move__input"><span class="sf6-move__input-label">Modern</span> <code>${escapeHtml(move.modernInput)}</code></span>`)

  const imgs = move.images.map((img) => {
    const src = escapeHtml(preferOriginalImageUrl(img.src))
    const alt = escapeHtml(img.alt || (img.kind === 'hitbox' ? `${move.name} hitbox` : move.name))
    return `<img class="sf6-move__img" data-kind="${img.kind}" src="${src}" alt="${alt}" loading="lazy" />`
  }).join('\n')

  const notes = move.notes.length
    ? `<ul class="sf6-move__notes">${move.notes.map(n => `<li>${escapeHtml(n)}</li>`).join('')}</ul>`
    : ''

  const description = move.description
    ? move.description.split(/\n\n+/).map(p => `<p class="sf6-move__desc">${escapeHtml(p)}</p>`).join('\n')
    : ''

  const table = move.frameTable ? renderHtmlTable(move.frameTable) : ''

  return [
    `<div class="sf6-move" id="${escapeHtml(move.id)}">`,
    `  <div class="sf6-move__media">`,
    `    <div class="sf6-move__title">${title}</div>`,
    inputBits.length ? `    <div class="sf6-move__inputs">${inputBits.join('')}</div>` : '',
    `    <div class="sf6-move__images">${imgs}</div>`,
    `  </div>`,
    `  <div class="sf6-move__info">`,
    `    <div class="sf6-move__notation">${notation}${move.displayName && move.displayName !== move.name ? ` <span class="sf6-move__subtitle">${escapeHtml(move.displayName)}</span>` : ''}</div>`,
    table ? `    ${table}` : '',
    notes ? `    ${notes}` : '',
    description ? `    ${description}` : '',
    `  </div>`,
    `</div>`,
  ].filter(Boolean).join('\n')
}

function footer(pageTitle: string, sourcePage: string): string {
  const ts = new Date().toISOString()
  return [
    '',
    '---',
    '',
    `*Source: [SuperCombo Wiki — ${pageTitle}](https://wiki.supercombo.gg/w/${encodeURIComponent(sourcePage.replace(/ /g, '_')).replace(/%2F/g, '/')})*`,
    '',
    `*Scraped: ${ts}*`,
  ].join('\n')
}

function frontmatter(title: string, description?: string): string {
  const lines = [
    '---',
    `title: ${JSON.stringify(title)}`,
  ]
  if (description)
    lines.push(`description: ${JSON.stringify(description)}`)
  lines.push('---', '')
  return lines.join('\n')
}

export function overviewToMarkdown(char: CharacterRef, data: OverviewData, sourcePage: string): string {
  const parts = [
    frontmatter(`${char.name} — Overview`, `Overview and introduction for ${char.name} in Street Fighter 6`),
    `# ${char.name}`,
    '',
    '## Overview',
    '',
    ...data.paragraphs.flatMap(p => [escapeMdProse(p), '']),
  ]
  if (data.pickAvoidHtml) {
    // Keep intentional wiki HTML blocks but neutralize stray angle-bracket tokens outside tags
    parts.push(data.pickAvoidHtml, '')
  }
  for (const table of data.comparisonTables) {
    parts.push(renderMarkdownTable(table), '')
  }
  parts.push(footer(`${char.name}/Introduction`, sourcePage))
  return parts.join('\n')
}

export function movesToMarkdown(char: CharacterRef, data: MovesData, sourcePage: string): string {
  const parts = [
    frontmatter(`${char.name} — Moves`, `Movelist for ${char.name}`),
    `# ${char.name} Moves`,
    '',
  ]
  if (data.portraitSrc) {
    parts.push(
      `<p class="sf6-move-portrait"><img src="${escapeHtml(preferOriginalImageUrl(data.portraitSrc))}" alt="${escapeHtml(char.name)}" loading="lazy" /></p>`,
      '',
    )
  }
  for (const section of data.sections) {
    parts.push(`## ${section.title}`, '')
    for (const p of section.prose)
      parts.push(escapeMdProse(p), '')
    for (const move of section.moves) {
      // Keep a markdown heading for TOC / "On this page"
      parts.push(`### ${escapeMdProse(move.name)}`, '')
      parts.push(renderMoveCard(move), '')
    }
  }
  parts.push(footer(`${char.name} movelist`, sourcePage))
  return parts.join('\n')
}

export function frameDataToMarkdown(char: CharacterRef, data: FrameDataResult, sourcePage: string): string {
  const parts = [
    frontmatter(`${char.name} — Frame Data`, `Frame data for ${char.name}`),
    `# ${char.name} Frame Data`,
    '',
  ]
  if (data.vitals) {
    parts.push('## Vitals', '', renderMarkdownTable(data.vitals), '')
  }
  let lastSection = ''
  for (const block of data.moveTables) {
    if (block.sectionTitle !== lastSection) {
      parts.push(`## ${block.sectionTitle}`, '')
      lastSection = block.sectionTitle
    }
    if (block.tabLabel)
      parts.push(`### ${block.tabLabel}`, '')
    parts.push(renderMarkdownTable(block.table), '')
  }
  parts.push(footer(`${char.name}/Frame data`, sourcePage))
  return parts.join('\n')
}

export function combosToMarkdown(char: CharacterRef, data: CombosData, sourcePage: string): string {
  const parts = [
    frontmatter(`${char.name} — Combos`, `Combos for ${char.name}`),
    `# ${char.name} Combos`,
    '',
  ]
  for (const p of data.prose.slice(0, 5))
    parts.push(escapeMdProse(p), '')
  for (const group of data.groups) {
    parts.push(`## ${escapeMdProse(group.title)}`, '')
    parts.push(renderMarkdownTable({ headers: group.headers, rows: group.rows }), '')
  }
  parts.push(footer(`${char.name}/Combos`, sourcePage))
  return parts.join('\n')
}

export function strategyToMarkdown(char: CharacterRef, data: StrategyData, sourcePage: string): string {
  const parts = [
    frontmatter(`${char.name} — Strategy`, `Strategy guide for ${char.name}`),
    `# ${char.name} Strategy`,
    '',
  ]
  for (const section of data.sections) {
    const hashes = '#'.repeat(Math.min(section.level, 4))
    parts.push(`${hashes} ${escapeMdProse(section.title)}`, '')
    for (const p of section.paragraphs)
      parts.push(escapeMdProse(p), '')
    for (const table of section.tables)
      parts.push(renderMarkdownTable(table), '')
  }
  parts.push(footer(`${char.name}/Strategy`, sourcePage))
  return parts.join('\n')
}

export function matchupsToMarkdown(char: CharacterRef, data: MatchupsData, sourcePage: string): string {
  const parts = [
    frontmatter(`${char.name} — Matchups`, `Matchup notes for ${char.name}`),
    `# ${char.name} Matchups`,
    '',
  ]
  for (const m of data.matchups) {
    parts.push(`## ${escapeMdProse(m.opponent)}`, '')
    if (m.opponentIconSrc)
      parts.push(`![${escapeMdProse(m.opponent)}](${preferOriginalImageUrl(m.opponentIconSrc)})`, '')
    if (m.favorability)
      parts.push(`**Favorability:** ${escapeMdProse(m.favorability)}`, '')
    for (const p of m.paragraphs)
      parts.push(escapeMdProse(p), '')
    for (const table of m.tables)
      parts.push(renderMarkdownTable(table), '')
    for (const sub of m.subsections) {
      parts.push(`### ${escapeMdProse(sub.title)}`, '')
      for (const p of sub.paragraphs)
        parts.push(escapeMdProse(p), '')
      for (const table of sub.tables)
        parts.push(renderMarkdownTable(table), '')
    }
  }
  parts.push(footer(`${char.name}/Matchups`, sourcePage))
  return parts.join('\n')
}

export function resourcesToMarkdown(char: CharacterRef, data: ResourcesData, sourcePage: string): string {
  const parts = [
    frontmatter(`${char.name} — Resources`, `External resources for ${char.name}`),
    `# ${char.name} Resources`,
    '',
  ]
  for (const section of data.sections) {
    parts.push(`## ${escapeMdProse(section.title)}`, '')
    for (const p of section.paragraphs)
      parts.push(escapeMdProse(p), '')
    if (section.links.length) {
      for (const link of section.links)
        parts.push(`- [${escapeMdProse(link.text)}](${link.href})`)
      parts.push('')
    }
    for (const table of section.tables)
      parts.push(renderMarkdownTable(table), '')
  }
  parts.push(footer(`${char.name}/Resources`, sourcePage))
  return parts.join('\n')
}

export async function writeCharacterMarkdown(
  char: CharacterRef,
  files: Record<string, string>,
  docsRoot: string,
): Promise<void> {
  const dir = join(docsRoot, 'characters', char.slug)
  await mkdir(dir, { recursive: true })
  for (const [name, content] of Object.entries(files)) {
    await writeFile(join(dir, name), content, 'utf8')
  }
}
