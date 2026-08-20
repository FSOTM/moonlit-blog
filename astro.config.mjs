import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fsotm.github.io',
  base: '/moonlit-blog',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      namespaces: {
        news: false,
        video: false,
        xhtml: false,
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
