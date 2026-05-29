// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import node from '@astrojs/node';

// Read the frontend URL from environment variables, fallback to example.com if not defined
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://example.com';

// https://astro.build/config
export default defineConfig({
    site: FRONTEND_URL, // Dynamic frontend site configuration for SEO and Sitemaps
    trailingSlash: 'never', //Configure '/' url
    //=============================================================================
    // INTEGRATIONS
    //=============================================================================
    integrations: [mdx(), sitemap()],

    //=============================================================================
    // LOCAL FONTS
    //=============================================================================
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    ],

    //=============================================================================
    // ADAPTER CONFIGURATION
    //=============================================================================
    adapter: node({
        mode: 'standalone', // Enables the backend server capabilities
    }),
});