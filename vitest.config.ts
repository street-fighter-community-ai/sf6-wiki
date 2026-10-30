import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      'scraper/**/*.test.ts',
      'docs/.vitepress/theme/drill-lang/**/*.test.ts',
    ],
  },
})
