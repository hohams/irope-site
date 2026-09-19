import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Before publishing a specific site, set SITE_URL in its GitHub environment.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  output: 'static',
  integrations: [sitemap()],
});
