import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// iRope is the production target of this repository. Other sites can override
// SITE_URL when the common template is reused in their own deployment.
export default defineConfig({
  site: process.env.SITE_URL || 'https://irope.lt',
  output: 'static',
  integrations: [sitemap()],
});
