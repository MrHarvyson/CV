import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mrharvyson.github.io/Astro',
  //base: 'Astro',
  integrations: [tailwind()],
})