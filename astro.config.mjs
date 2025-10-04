// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    site: 'https://glowing-seahorse-6283ed.netlify.app',
    integrations: [preact()]
});
