import { defineConfig } from 'astro/config';
import icons from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icons({
      collections: {
        ic: '@iconify-json/ic',  // Ensure this is the correct path
        // Add more collections if needed
      },
    }),
  ],
});