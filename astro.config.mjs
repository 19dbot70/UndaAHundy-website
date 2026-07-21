// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Unda A Hundy site — Astro static build, deployed on Netlify.
// Reference: ../build-plan-v1.md
export default defineConfig({
  site: 'https://undaahundy.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap(),
  ],
  // Netlify adapter added once we wire DNS. Static-only at scaffold stage.
});
