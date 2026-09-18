// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Static output: HTML shell delivered from Cloudflare edge (fastest possible).
// Article data is fetched live from Payload CMS API via client-side JS —
// no rebuild needed when publishing new articles.
export default defineConfig({
  output: 'static',
  compressHTML: true,
});
