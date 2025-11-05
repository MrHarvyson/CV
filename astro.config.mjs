// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://josecarlosmoreno.github.io', // Reemplaza con tu nombre de usuario
  base: '/CV',  // Nombre de tu repositorio
  integrations: [tailwind()]
});