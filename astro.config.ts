import { defineConfig } from 'astro/config';

// @ts-ignore -- TS doesn't like this path for some reason
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
});
