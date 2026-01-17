import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  nitro: {
    minify: true,
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['@/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/hints',
    '@nuxt/a11y',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
  ],

  site: {
    name: 'Nuxpert',
    url: 'https://nuxpert.vercel.app/',
    description:
      'Production-ready Nuxt 4 starter with TypeScript, Tailwind CSS, accessibility, and SEO built in.',
    tagline: 'Nuxt 4 Starter Template for Production',
  },

  sitemap: {
    zeroRuntime: true,
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date().toISOString()
    }
  },

  icon: {
    class: 'inline-block',
    clientBundle: { scan: true },
    serverBundle: false,
  },

  fonts: {
    defaults: {
      preload: true,
      weights: [400, 500, 600, 700, 800],
      styles: ['normal', 'italic'],
      fallbacks: {
        'sans-serif': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial'],
        // monospace: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Menlo', 'Consolas'],
      },
    },
    assets: {
      prefix: '/_fonts',
    },
  },

  typescript: {
    strict: true,
  },

  experimental: {
    extractAsyncDataHandlers: true,
    payloadExtraction: true,
  },

  routeRules: {
    '/**/*.{css,png,icon,svg,woff,woff2}': {
      cache: {
        swr: true,
        maxAge: 60 * 60 * 72, // 3 days
      },
    },
  },
})
