import type { CharacterRef } from './types.js'
import { access } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { characterPages, findCharacter, listCharactersFromHub } from './characters.js'
import { collectImagesFromHtml, collectUrlsFromMarkdown, downloadImages, rewriteMarkdownImages } from './images.js'
import { parsePage } from './mediawiki.js'
import { updateVitePressNav } from './nav.js'
import { parseCombos } from './parse/combos.js'
import { parseFrameData } from './parse/frame-data.js'
import { parseMatchups } from './parse/matchups.js'
import { parseMoves } from './parse/moves.js'
import { parseOverview } from './parse/overview.js'
import { parseResources } from './parse/resources.js'
import { parseStrategy } from './parse/strategy.js'
import {
  combosToMarkdown,
  frameDataToMarkdown,
  matchupsToMarkdown,
  movesToMarkdown,
  overviewToMarkdown,
  resourcesToMarkdown,
  strategyToMarkdown,
  writeCharacterMarkdown,
} from './write-md.js'

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '../..')
const DOCS = resolve(ROOT, 'docs')
const DOCS_PUBLIC = resolve(DOCS, 'public')

const CHAR_GAP_MS = Number(process.env.SF6_CHAR_GAP_MS || 400)

async function alreadyScraped(slug: string): Promise<boolean> {
  if (process.env.SF6_FORCE === '1')
    return false
  const required = ['overview.md', 'moves.md', 'frame-data.md', 'combos.md', 'strategy.md', 'matchups.md', 'resources.md']
  try {
    await Promise.all(required.map(f => access(resolve(DOCS, 'characters', slug, f))))
    return true
  }
  catch {
    return false
  }
}

async function scrapeCharacter(char: CharacterRef): Promise<void> {
  console.log(`\n=== ${char.name} (${char.slug}) ===`)
  if (await alreadyScraped(char.slug)) {
    console.log('  skip (already present; set SF6_FORCE=1 to re-scrape)')
    return
  }
  const pages = characterPages(char.pageName)

  // Sequential api.php action=parse (never /w/ article URLs)
  console.log('  fetch overview…')
  const overviewHtml = await parsePage(pages.overview)
  console.log('  fetch moves…')
  const movesHtml = await parsePage(pages.moves)
  console.log('  fetch frame data…')
  const frameHtml = await parsePage(pages.frameData)
  console.log('  fetch combos…')
  const combosHtml = await parsePage(pages.combos)
  console.log('  fetch strategy…')
  const strategyHtml = await parsePage(pages.strategy)
  console.log('  fetch matchups…')
  const matchupsHtml = await parsePage(pages.matchups)
  console.log('  fetch resources…')
  const resourcesHtml = await parsePage(pages.resources)

  const htmlBundle = [
    overviewHtml.html,
    movesHtml.html,
    frameHtml.html,
    combosHtml.html,
    strategyHtml.html,
    matchupsHtml.html,
    resourcesHtml.html,
  ]

  let overviewMd = overviewToMarkdown(char, parseOverview(overviewHtml.html), pages.overview)
  let movesMd = movesToMarkdown(char, parseMoves(movesHtml.html), pages.moves)
  let frameMd = frameDataToMarkdown(char, parseFrameData(frameHtml.html), pages.frameData)
  let combosMd = combosToMarkdown(char, parseCombos(combosHtml.html), pages.combos)
  let strategyMd = strategyToMarkdown(char, parseStrategy(strategyHtml.html), pages.strategy)
  let matchupsMd = matchupsToMarkdown(char, parseMatchups(matchupsHtml.html), pages.matchups)
  let resourcesMd = resourcesToMarkdown(char, parseResources(resourcesHtml.html), pages.resources)

  // Default: hotlink full-size images on srk.shib.live (no download).
  // Opt-in local copies: SF6_DOWNLOAD_IMAGES=1
  let imageMap = new Map<string, string>()
  if (process.env.SF6_DOWNLOAD_IMAGES === '1') {
    const moves = parseMoves(movesHtml.html)
    const matchups = parseMatchups(matchupsHtml.html)
    const includeHitboxes = process.env.SF6_INCLUDE_HITBOXES === '1'
    const urls = [
      ...[overviewMd, movesMd, frameMd, combosMd, strategyMd, matchupsMd, resourcesMd]
        .flatMap(collectUrlsFromMarkdown),
      ...htmlBundle.flatMap(collectImagesFromHtml),
    ]
    if (moves.portraitSrc)
      urls.push(moves.portraitSrc)
    for (const s of moves.sections) {
      for (const m of s.moves) {
        for (const img of m.images) {
          if (!includeHitboxes && img.kind === 'hitbox')
            continue
          urls.push(img.src)
        }
      }
    }
    for (const m of matchups.matchups) {
      if (m.opponentIconSrc)
        urls.push(m.opponentIconSrc)
    }
    imageMap = await downloadImages(urls, { slug: char.slug, docsPublicRoot: DOCS_PUBLIC })
  }
  else {
    console.log('  images: hotlink → srk.shib.live (set SF6_DOWNLOAD_IMAGES=1 to cache locally)')
  }

  overviewMd = rewriteMarkdownImages(overviewMd, imageMap)
  movesMd = rewriteMarkdownImages(movesMd, imageMap)
  frameMd = rewriteMarkdownImages(frameMd, imageMap)
  combosMd = rewriteMarkdownImages(combosMd, imageMap)
  strategyMd = rewriteMarkdownImages(strategyMd, imageMap)
  matchupsMd = rewriteMarkdownImages(matchupsMd, imageMap)
  resourcesMd = rewriteMarkdownImages(resourcesMd, imageMap)

  await writeCharacterMarkdown(char, {
    'overview.md': overviewMd,
    'moves.md': movesMd,
    'frame-data.md': frameMd,
    'combos.md': combosMd,
    'strategy.md': strategyMd,
    'matchups.md': matchupsMd,
    'resources.md': resourcesMd,
  }, DOCS)

  console.log(`  wrote docs/characters/${char.slug}/*`)
}

async function main() {
  const args = process.argv.slice(2).filter(a => a !== '--')
  const modeAll = args.includes('all')
  const target = args.find(a => a !== 'all') || 'Ryu'

  console.log('Listing characters from SuperCombo hub…')
  const chars = await listCharactersFromHub()
  console.log(`Found ${chars.length} characters`)

  let selected: CharacterRef[]
  if (modeAll) {
    selected = chars
  }
  else {
    const found = findCharacter(chars, target)
    if (!found) {
      console.error(`Character not found: ${target}`)
      console.error(`Available: ${chars.map(c => c.pageName).join(', ')}`)
      process.exit(1)
    }
    selected = [found]
  }

  const scraped: CharacterRef[] = []
  for (const char of selected) {
    try {
      await scrapeCharacter(char)
      scraped.push(char)
    }
    catch (err) {
      console.error(`FAILED ${char.name}:`, err)
      if (!modeAll)
        process.exit(1)
    }
    if (modeAll)
      await new Promise(r => setTimeout(r, CHAR_GAP_MS))
  }

  await updateVitePressNav(DOCS, scraped)

  if (scraped.length === 0 || (modeAll && scraped.length < selected.length)) {
    console.error(`\nIncomplete scrape: ${scraped.length}/${selected.length}`)
    process.exit(1)
  }

  console.log(`\nDone. Scraped ${scraped.length}/${selected.length} characters.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
