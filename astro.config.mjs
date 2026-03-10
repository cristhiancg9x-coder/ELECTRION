import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://electrion.netlify.app',
  integrations: [tailwind()]
});
