import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
  output: 'server',
  adapter: vercel(),
});