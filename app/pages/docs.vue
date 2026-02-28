<!-- eslint-disable unicorn/prevent-abbreviations -->
<script setup lang="ts">
useSeo({
  meta: {
    title: 'Docs',
    description:
      'Complete documentation for Nuxpert: Nuxt 4 starter template with TypeScript, Tailwind, SEO, accessibility, and developer tooling.',
    shortDescription:
      'Documentation and guide for Nuxpert: Nuxt 4 starter template for modern web apps.',
    url: 'https://nuxpert.vercel.app/docs',
  },
})

const docsSections = [
  {
    id: 'whats-included',
    title: "What's Included",
    features: [
      {
        category: 'Core',
        items: [
          'Nuxt 4 with SSR, SSG, hybrid rendering',
          'Vue 3 Composition API',
          'Strict TypeScript',
        ],
      },
      {
        category: 'Styling',
        items: ['Tailwind CSS setup', 'Clean global CSS entry', 'Minimal but opinionated design'],
      },
      {
        category: 'SEO & Performance',
        items: [
          'Automatic sitemap',
          'Open Graph generation',
          'Blazing fast loads',
          'Caching rules for assets',
        ],
      },
      {
        category: 'Accessibility',
        items: ['Nuxt A11y module', 'Accessible defaults & ARIA patterns'],
      },
      {
        category: 'Developer Experience',
        items: [
          'ESLint configured',
          'Nuxt DevTools',
          'VueUse utilities',
          'Iconify icons',
          'Optimized fonts',
        ],
      },
      {
        category: 'Tooling',
        items: ['PNPM-first workflow', 'Prettier + Tailwind formatting', 'Vite build pipeline'],
      },
    ],
  },
  {
    id: 'who-is-nuxpert',
    title: 'Who Nuxpert Is For',
    goodFit: [
      'Build production Nuxt applications',
      'Care about structure, performance, and maintainability',
      'Want strong defaults without heavy abstractions',
      'Prefer modern tooling and strict TypeScript',
    ],
    notFit: [
      'Want a heavy UI kit or component library',
      'Prefer zero opinions or tutorial-style setups',
      'Looking for a no-code or low-code solution',
    ],
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    codeSnippet: `git clone https://github.com/MFM-347/nuxpert.git
cd nuxpert
pnpm install
nr dev`,
  },
]
</script>
<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside
      class="sticky top-0 hidden h-screen w-72 border-r border-border bg-card/40 p-6 pt-20 md:block"
    >
      <h2 class="mb-6 text-2xl font-bold">Nuxpert Docs</h2>
      <nav class="space-y-3">
        <a
          v-for="section in docsSections"
          :key="section.id"
          :href="'#' + section.id"
          class="block text-foreground/80 hover:text-foreground"
        >
          {{ section.title }}
        </a>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="mx-auto max-w-4xl flex-1 px-6 pt-16">
      <section
        v-for="section in docsSections"
        :id="section.id"
        :key="section.id"
        class="mb-16 scroll-mt-20"
      >
        <h2
          class="mb-6 scroll-m-20 px-2 pb-2 text-center text-4xl font-semibold tracking-tight text-balance md:text-5xl 2xl:mt-0"
        >
          {{ section.title }}
        </h2>

        <!-- Features -->
        <div v-if="section.features" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="featureGroup in section.features"
            :key="featureGroup.category"
            class="rounded-lg border border-border bg-card/20 p-6 shadow-sm"
          >
            <h3 class="mb-3 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl">
              {{ featureGroup.category }}
            </h3>
            <ul class="list-disc space-y-1 pl-5">
              <li v-for="item in featureGroup.items" :key="item" class="text-foreground/80">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Good fit / Not fit -->
        <div v-if="section.goodFit" class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="rounded-lg bg-accent/10 p-6">
            <h3 class="mb-2 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl">
              Good fit if you:
            </h3>
            <ul class="space-y-2">
              <li v-for="item in section.goodFit" :key="item" class="flex items-center gap-2">
                <Icon name="hugeicons:tick-01" class="text-success" /> {{ item }}
              </li>
            </ul>
          </div>
          <div class="rounded-lg bg-accent/10 p-6">
            <h3 class="mb-2 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl">
              Probably not for you if you:
            </h3>
            <ul class="space-y-2">
              <li v-for="item in section.notFit" :key="item" class="flex items-center gap-2">
                <Icon name="hugeicons:cancel-01" class="text-destructive" /> {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Code snippet -->
        <div v-if="section.codeSnippet" class="relative mt-6">
          <pre
            class="overflow-x-auto rounded-lg bg-secondary/20 p-6"
          ><code>{{ section.codeSnippet }}</code></pre>
        </div>
      </section>
    </main>
  </div>
</template>
