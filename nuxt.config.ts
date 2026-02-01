import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  nitro: { minify: true },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vueuse/core'],
    },
  },

  css: ['@/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/a11y',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],

  icon: {
    clientBundle: { scan: true },
    serverBundle: false,
  },

  fonts: {
    priority: ['google'],
    families: [
      {
        name: 'Inter',
        weights: [400, 500, 600, 700, 800],
        fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial'],
        global: true,
      },
      {
        name: 'IBM Plex Mono',
        fallbacks: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Menlo', 'Consolas'],
        weights: [400, 500],
        global: true,
      },
    ],
  },

  site: {
    name: 'Nuxpert',
    url: 'https://nuxpert.vercel.app/',
    description:
      'Production-ready Nuxt 4 starter with TypeScript, Tailwind CSS, accessibility, and SEO built in.',
    tagline: 'Nuxt 4 Starter Template',
  },

  sitemap: {
    zeroRuntime: true,
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date().toISOString(),
    },
  },

  ogImage: {
    zeroRuntime: true,
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    storageKey: 'nuxpert-color-mode',
  },

  typescript: {
    strict: true,
  },

  experimental: {
    entryImportMap: false,
    viteEnvironmentApi: true,
    viewTransition: true,
    typedPages: true,
    buildCache: true,
  },

  routeRules: {
    '/': { prerender: true },
    '/**/*.{css,png,icon,svg,woff,woff2}': {
      cache: {
        swr: true,
        maxAge: 60 * 60 * 24 * 3, // 3 days
      },
    },
  },
})
