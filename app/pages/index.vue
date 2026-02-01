<script setup lang="ts">
useSeo({
  meta: {
    title: 'Nuxpert - Nuxt 4 Starter Template',
    description:
      'Production-ready Nuxt 4 starter with TypeScript, Tailwind CSS, accessibility, and SEO built in.',
    url: 'https://nuxpert.vercel.app/',
  },
})

defineOgImageComponent('NuxtSeo')

const includedFeatures = [
  {
    title: 'Core',
    features: [
      '<strong>Nuxt 4</strong> with full SSR, SSG, and hybrid rendering',
      '<strong>Vue 3</strong> with Composition API',
      '<strong>TypeScript (strict mode)</strong> enabled by default',
    ],
  },
  {
    title: 'Styling',
    features: [
      '<strong>Tailwind CSS</strong> via Vite plugin',
      'Clean global CSS entry',
      'Opinionated but minimal styling setup',
    ],
  },
  {
    title: 'SEO & Performance',
    features: [
      'Automatic sitemap generation',
      'Open Graph image generation',
      'Pre-rendering enabled for critical routes',
      'Sensible caching rules for static assets',
    ],
  },
  {
    title: 'Accessibility',
    features: ['Nuxt A11y module enabled', 'Accessible defaults out of the box'],
  },
  {
    title: 'Developer Experience',
    features: [
      'ESLint configured and enabled',
      'Nuxt DevTools enabled',
      'VueUse auto-imported',
      'Icons via Iconify',
      'Fonts optimized and preloaded',
    ],
  },
  {
    title: 'Tooling',
    features: [
      'PNPM-first workflow',
      'Prettier with Tailwind-aware formatting',
      'Modern Vite-based build pipeline',
    ],
  },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <section id="hero" class="relative flex min-h-[calc(100vh-1rem)] items-center justify-center">
      <div class="mx-auto max-w-4xl space-y-4 text-center md:space-y-6">
        <h1
          class="bg-gradient-to-br from-foreground to-foreground/40 bg-clip-text title text-center text-transparent"
        >
          Modern Nuxt 4 Starter Template
        </h1>
        <p class="text-lg text-muted-foreground sm:text-xl">
          A refined Nuxt 4 template with TypeScript, Tailwind CSS, accessibility, and SEO baked in.
          Built for serious Nuxt developers.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-x-4">
          <VBtn
            class="transition-all duration-160 hover:-translate-y-1 hover:drop-shadow-btn"
            href="https://github.com/mfm-347/nuxpert/generate"
            target="_blank"
            rel="noopener"
            aria-label="Use the Nuxpert Nuxt 4 starter template"
          >
            Use this template
            <Icon class="text-[16px]" name="hugeicons:arrow-right-02" />
          </VBtn>
          <VBtn
            class="transition-all duration-160 hover:-translate-y-1 hover:drop-shadow-btn2"
            variant="secondary"
            href="https://github.com/mfm-347/nuxpert"
            target="_blank"
            rel="noopener"
            aria-label="View Nuxpert on GitHub"
          >
            View GitHub
            <Icon class="text-[16px]" name="hugeicons:github" />
          </VBtn>
        </div>
      </div>
    </section>

    <section id="whats-included" class="bg-accent/20">
      <div class="container">
        <h2>What’s Included</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(val, i) in includedFeatures"
            :key="i"
            class="transform rounded-xl bg-card p-6 text-card-foreground transition-all duration-160 hover:-translate-y-1 hover:shadow-card"
          >
            <h3>{{ val.title }}</h3>
            <ul>
              <li v-for="(feature, j) in val.features" :key="j">{{ feature }}</li>
            </ul>
          </div>
        </div>
        <p class="mt-8 text-base text-muted-foreground italic">
          Everything is configured for production, but stays easy to extend or remove.
        </p>
      </div>
    </section>

    <section id="who-is-nuxpert-for">
      <div class="container">
        <h2>Who Nuxpert Is For</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            class="rounded-lg bg-accent/10 p-6 transition-all duration-160 hover:-translate-y-0.5"
          >
            <h3>Good fit if you:</h3>
            <ul>
              <li>Build production Nuxt applications</li>
              <li>Care about structure, performance, and maintainability</li>
              <li>Want strong defaults without heavy abstractions</li>
              <li>Prefer modern tooling and strict TypeScript</li>
            </ul>
          </div>
          <div
            class="rounded-lg bg-accent/10 p-6 transition-all duration-160 hover:-translate-y-0.5"
          >
            <h3>Probably not for you if you:</h3>
            <ul>
              <li>Want a heavy UI kit or component library</li>
              <li>Prefer zero opinions or tutorial-style setups</li>
              <li>Are looking for a no-code or low-code solution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="getting-started" class="">
      <h2>Getting Started</h2>
      <p class="mb-4 text-center text-muted-foreground">Start a new project in minutes:</p>
      <pre class="mb-6 overflow-x-auto rounded-lg bg-gray-900 p-6 text-gray-100">
<code>git clone https://github.com/MFM-347/nuxpert.git
cd nuxpert
pnpm install
nr dev</code>
</pre>
      <p class="mb-6 text-center text-muted-foreground">
        That’s it. No extra configuration required.
      </p>
    </section>

    <section id="last-section" class="bg-linear-to-b from-primary to-primary/60">
      <div class="container">
        <h2 class="mb-6 text-4xl font-bold">Ready to build with Nuxt 4?</h2>
        <p class="mb-8 text-lg">Nuxpert gives you a clean, production-ready foundation…</p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-x-4">
          <VBtn
            class="transition-all duration-160 hover:scale-105"
            href="https://github.com/mfm-347/nuxpert/generate"
            target="_blank"
            rel="noopener"
          >
            Use this template
          </VBtn>
          <VBtn
            class="transition-all duration-160 hover:scale-105"
            variant="secondary"
            href="https://github.com/mfm-347/nuxpert"
          >
            View GitHub
          </VBtn>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@reference "../main.css";

section .container {
  @apply px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10;
}

h2 {
  @apply mb-8 max-w-lg scroll-m-20 border-b px-2 pb-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance first:mt-0 max-sm:px-4 2xl:mt-0;
}

h3 {
  @apply mb-4 scroll-m-20 text-base/6 font-semibold tracking-tight;
}

ul {
  @apply list-inside list-disc space-y-2;
}
</style>
