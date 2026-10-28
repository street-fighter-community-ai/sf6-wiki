export interface CharacterRef {
  /** Display name as on the wiki (e.g. "Ryu", "C. Viper") */
  name: string
  /** MediaWiki page segment (e.g. "Ryu", "C.Viper") */
  pageName: string
  /** URL/file slug (lowercase, hyphenated) */
  slug: string
}

export interface ParsedSection {
  id: string
  title: string
  level: number
  html: string
}

export interface OverviewData {
  paragraphs: string[]
  pickAvoidHtml?: string
  comparisonTables: MarkdownTable[]
  extraHtml: string
}

export interface MoveImage {
  src: string
  alt?: string
  kind: 'move' | 'hitbox' | 'other'
}

export interface MoveEntry {
  id: string
  /** Short notation / heading (e.g. "2MP") */
  name: string
  /** Full move title from wiki (e.g. "Crouching Medium Punch") */
  displayName?: string
  classicInput?: string
  modernInput?: string
  images: MoveImage[]
  frameTable?: MarkdownTable
  /** Bullet notes under the frame table (hitconfirm, DR cancel, etc.) */
  notes: string[]
  /** Prose description under the notes list */
  description?: string
}

export interface MovesData {
  sections: Array<{
    id: string
    title: string
    moves: MoveEntry[]
    prose: string[]
  }>
  portraitSrc?: string
}

export interface MarkdownTable {
  headers: string[]
  rows: string[][]
  caption?: string
}

export interface FrameDataResult {
  vitals?: MarkdownTable
  moveTables: Array<{
    sectionTitle: string
    tabLabel?: string
    table: MarkdownTable
  }>
}

export interface ComboGroup {
  title: string
  headers: string[]
  rows: string[][]
}

export interface CombosData {
  groups: ComboGroup[]
  prose: string[]
}

export interface StrategyData {
  sections: Array<{
    id: string
    title: string
    level: number
    paragraphs: string[]
    tables: MarkdownTable[]
  }>
}

export interface MatchupEntry {
  opponent: string
  opponentIconSrc?: string
  favorability?: string
  paragraphs: string[]
  tables: MarkdownTable[]
  subsections: Array<{
    title: string
    paragraphs: string[]
    tables: MarkdownTable[]
  }>
}

export interface MatchupsData {
  matchups: MatchupEntry[]
}

export interface ResourcesData {
  sections: Array<{
    id: string
    title: string
    paragraphs: string[]
    links: Array<{ text: string, href: string }>
    tables: MarkdownTable[]
  }>
}

export interface CharacterPages {
  overview: OverviewData
  moves: MovesData
  frameData: FrameDataResult
  combos: CombosData
  strategy: StrategyData
  matchups: MatchupsData
  resources: ResourcesData
}

export interface ImageMap {
  /** remote absolute URL -> local public path `/characters/<slug>/...` */
  [remoteUrl: string]: string
}
