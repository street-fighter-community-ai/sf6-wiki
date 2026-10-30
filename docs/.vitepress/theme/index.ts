import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import CharacterDocIcon from './CharacterDocIcon.vue'
import HitboxToggle from './HitboxToggle.vue'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'nav-bar-content-after': () => h(HitboxToggle),
    'doc-before': () => h(CharacterDocIcon),
  }),
} satisfies Theme
