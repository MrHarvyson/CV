import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import { AstroComponentInstance } from 'astro/runtime/server/index.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrharvyson.github.io',
  base: Astro,
  integrations: [tailwind()],
});