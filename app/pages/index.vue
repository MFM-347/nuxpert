<script setup lang="ts">
const meta = {
  title: 'Nuxpert – Nuxt 4 Starter Template for Production',
  description:
    'Production-ready Nuxt 4 starter with TypeScript, Tailwind CSS, accessibility, and SEO built in.',
  url: 'https://nuxpert.vercel.app/',
}
useSeo({ meta })

defineOgImageComponent('NuxtSeo', {
  title: 'Nuxpert – Modern Nuxt 4 Starter',
  description: 'A production-ready Nuxt 4 starter for serious developers.',
  theme: '#3f79ff',
})

const included = [
  {
    title: 'Core',
    items: [
      '<strong>Nuxt 4</strong> with full SSR, SSG, and hybrid rendering',
      '<strong>Vue 3</strong> with Composition API',
      '<strong>TypeScript (strict mode)</strong> enabled by default',
    ],
  },
  {
    title: 'Styling',
    items: [
      '<strong>Tailwind CSS</strong> via Vite plugin',
      'Clean global CSS entry',
      'Opinionated but minimal styling setup',
    ],
  },
  {
    title: 'SEO & Performance',
    items: [
      'Automatic sitemap generation',
      'Open Graph image generation',
      'Pre-rendering enabled for critical routes',
      'Sensible caching rules for static assets',
    ],
  },
  {
    title: 'Accessibility',
    items: ['Nuxt A11y module enabled', 'Accessible defaults out of the box'],
  },
  {
    title: 'Developer Experience',
    items: [
      'ESLint configured and enabled',
      'Nuxt DevTools enabled',
      'VueUse auto-imported',
      'Icons via Iconify',
      'Fonts optimized and preloaded',
    ],
  },
  {
    title: 'Tooling',
    items: [
      'PNPM-first workflow',
      'Prettier with Tailwind-aware formatting',
      'Modern Vite-based build pipeline',
    ],
  },
]
</script>

<template>
  <div class="min-h-dvh">
    <section
      id="hero"
      class="container flex flex-col items-center justify-center py-36 text-center"
    >
      <h1
        class="scroll-m-20 px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl"
      >
        Modern Nuxt 4 Starter Template
      </h1>
      <p
        class="mt-4 max-w-xl px-2 text-lg/7 leading-7 font-medium text-muted-foreground max-sm:px-4 sm:text-lg"
      >
        A refined Nuxt 4 template with TypeScript, Tailwind CSS, accessibility, and SEO baked in.
        Built for serious Nuxt developers.
      </p>
      <div class="mt-6 flex flex-wrap items-center justify-center gap-x-4">
        <a
          class="transition-all duration-160 hover:-translate-y-1 hover:drop-shadow-btn"
          href="https://github.com/mfm-347/nuxpert/generate"
          target="_blank"
          rel="noopener"
          aria-label="Use the Nuxpert Nuxt 4 starter template"
        >
          <VBtn>
            Use this template
            <Icon class="size-4" name="carbon-arrow-right" />
          </VBtn>
        </a>
        <a
          class="transition-all duration-160 hover:-translate-y-1 hover:drop-shadow-btn2"
          href="https://github.com/mfm-347/nuxpert"
          target="_blank"
          rel="noopener"
          aria-label="View Nuxpert on GitHub"
        >
          <VBtn variant="secondary">
            View GitHub
            <Icon class="size-4" name="carbon-logo-github" />
          </VBtn>
        </a>
      </div>
    </section>

    <section id="whats-included" class="bg-accent/20">
      <div class="container px-4 md:px-6 lg:px-8">
        <h2>What’s Included</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="i in included"
            :key="i.title"
            class="transform rounded-xl bg-card p-6 text-card-foreground transition-all duration-160 hover:-translate-y-1 hover:shadow-card"
          >
            <h3>{{ i.title }}</h3>
            <ul>
              <li v-for="item in i.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <p class="mt-8 text-base text-muted-foreground italic">
          Everything is configured for production, but stays easy to extend or remove.
        </p>
      </div>
    </section>

    <section id="who-is-nuxpert-for">
      <div class="container px-4 md:px-6 lg:px-8">
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

    <section id="getting-started">
      <div class="container px-4 md:px-6 lg:px-8">
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
      </div>
    </section>

    <section id="last-section" class="bg-linear-to-b from-primary/60 to-primary/30">
      <div class="container px-4 md:px-6 lg:px-8">
        <h2 class="mb-6 text-4xl font-bold">Ready to build with Nuxt 4?</h2>
        <p class="mb-8 text-lg">Nuxpert gives you a clean, production-ready foundation…</p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-x-4">
          <a href="https://github.com/mfm-347/nuxpert/generate" target="_blank" rel="noopener">
            <VBtn class="transition-all duration-160 hover:scale-105">Use this template</VBtn>
          </a>
          <a href="https://github.com/mfm-347/nuxpert">
            <VBtn class="transition-all duration-160 hover:scale-105" variant="secondary"
              >View GitHub</VBtn
            >
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@reference "../main.css";

section:not(#hero) {
  @apply border-b py-12;
}

h2 {
  @apply mb-8 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0;
}

h3 {
  @apply mb-4 scroll-m-20 text-2xl font-semibold tracking-tight;
}

ul {
  @apply list-inside list-disc space-y-2;
}
</style>
