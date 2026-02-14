import tailwindcss from '@tailwindcss/vite'
import { defineOrganization } from 'nuxt-schema-org/schema'

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
    '@nuxtjs/fontaine',
  ],

  icon: {
    clientBundle: { scan: true },
    serverBundle: false,
    size: '24px',
    mode: 'css',
    cssLayer: 'base',
  },

  fonts: {
    priority: ['google'],
    families: [
      {
        name: 'Inter',
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

  schemaOrg: {
    identity: defineOrganization({
      name: 'Nuxpert',
      logo: '/icon.svg',
      description:
        'Production-ready Nuxt 4 starter with TypeScript, Tailwind CSS, accessibility, and SEO built in.',
      url: 'https://nuxpert.vercel.app/',
    }),
    minify: true,
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
    '/github': {
      redirect: 'https://github.com/MFM-347/nuxpert',
    },
    '/**/*.{css,png,icon,svg,woff,woff2}': {
      cache: {
        swr: true,
        maxAge: 60 * 60 * 24 * 3, // 3 days
      },
    },
  },
})
