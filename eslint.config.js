import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  markdown: false,
  ignores: [
    'docs/characters/**',
    'docs/public/characters/**',
    'docs/.vitepress/dist/**',
    'docs/.vitepress/cache/**',
    'docs/.vitepress/config.ts',
    '.cache/**',
    'hub.json',
    'hub-parse.html',
    'ryu-*.html',
    '_*.mjs',
  ],
}).append({
  files: ['scraper/**/*.ts'],
  rules: {
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'node/prefer-global/buffer': 'off',
  },
})
