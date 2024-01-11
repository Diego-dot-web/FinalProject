import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site:"https://diego-dot-web.github.io/FinalProject/",
  base:"FinalProject"
});