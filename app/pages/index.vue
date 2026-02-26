<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
useSeo({
  meta: {
    title: 'Nuxpert - Supercharge Your Nuxt Workflow',
    description:
      'Production-ready Nuxt 4 starter with TypeScript, Tailwind CSS, accessibility, and SEO built in.',
    url: 'https://nuxpert.vercel.app/',
  },
})
defineOgImageComponent('nuxt-seo')

const includedFeatures = [
  {
    icon: 'hugeicons:cpu',
    title: 'Core',
    features: [
      '<strong>Nuxt 4</strong> with full SSR, SSG, and hybrid rendering support.',
      '<strong>Vue 3</strong> with the latest Composition API features.',
      '<strong>Strict TypeScript</strong> setup to catch errors early.',
    ],
  },
  {
    icon: 'hugeicons:css-3',
    title: 'Styling',
    features: [
      '<strong>Tailwind CSS</strong> integrated via the official Vite plugin.',
      'Clean global CSS entry for easy customization.',
      'Opinionated but minimal styling to get you started faster.',
    ],
  },
  {
    icon: 'hugeicons:analytics-01',
    title: 'SEO & Performance',
    features: [
      'Automatic sitemap generation so search engines index you correctly from day one.',
      'Open Graph image generation for beautiful social media shares.',
      'Blazing fast initial load times with pre-rendering for critical routes.',
      'Sensible caching rules for static assets to optimize delivery.',
    ],
  },
  {
    icon: 'hugeicons:universal-access-circle',
    title: 'Accessibility',
    features: [
      'Nuxt A11y module enabled for automated accessibility checks.',
      'Accessible defaults and ARIA patterns out of the box.',
    ],
  },
  {
    icon: 'hugeicons:computer-terminal-02',
    title: 'Developer Experience',
    features: [
      'Maintain code quality with ESLint already configured.',
      'Nuxt DevTools enabled for an amazing debugging experience.',
      'VueUse auto-imported for a huge collection of utilities.',
      'Icons via Iconify, with thousands of icons on-demand.',
      'Fonts optimized and preloaded for maximum performance.',
    ],
  },
  {
    icon: 'hugeicons:tools',
    title: 'Tooling',
    features: [
      'PNPM-first workflow for efficient package management.',
      'Prettier with Tailwind-aware formatting for consistent code style.',
      'Modern Vite-based build pipeline for lightning-fast development.',
    ],
  },
]

const codeSnippet = `git clone https://github.com/MFM-347/nuxpert.git
cd nuxpert
pnpm install
nr dev`.trim()

const { copy, copied } = useClipboard({ source: codeSnippet, read: false })

const copyButtonText = ref('Copy')
const copyButtonIcon = ref('hugeicons:copy-01')

watch(copied, (isCopied) => {
  if (isCopied) {
    copyButtonText.value = 'Copied!'
    copyButtonIcon.value = 'hugeicons:tick-01'
    useTimeoutFn(() => {
      copyButtonText.value = 'Copy'
      copyButtonIcon.value = 'hugeicons:copy-01'
    }, 2000)
  }
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <section
      id="hero"
      class="relative flex min-h-[calc(100vh-1rem)] animate-in items-center justify-center bg-linear-to-b from-primary/60 to-background duration-1000 fade-in"
    >
      <div class="mx-auto max-w-4xl space-y-4 text-center md:space-y-6">
        <h1
          class="bg-linear-to-br from-foreground to-foreground/40 bg-clip-text title text-center text-transparent"
        >
          Supercharge your Nuxt workflow
        </h1>
        <p class="text-lg text-muted-foreground sm:text-xl">
          A refined Nuxt 4 template with TypeScript, Tailwind CSS, accessibility, and SEO baked in.
          Built for developers who value speed and best practices.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-4">
          <VButton
            class="animate-in transition-all duration-700 fade-in-20 hover:-translate-y-1 hover:drop-shadow-btn"
            href="https://github.com/mfm-347/nuxpert/generate"
            target="_blank"
            rel="noopener"
            aria-label="Use the Nuxpert Nuxt 4 starter template"
          >
            Use this template
            <Icon class="size-4" name="hugeicons:arrow-right-02" />
          </VButton>
          <VButton
            class="transition-all duration-160 hover:-translate-y-1 hover:drop-shadow-btn"
            variant="secondary"
            href="https://nuxpert.vercel.app/"
            target="_blank"
            rel="noopener"
            aria-label="View live demo of Nuxpert"
          >
            View Demo
            <Icon class="size-4" name="carbon:launch" />
          </VButton>
          <VButton
            class="transition-all duration-160 hover:-translate-y-1 hover:drop-shadow-btn2"
            variant="outline"
            href="https://github.com/mfm-347/nuxpert"
            target="_blank"
            rel="noopener"
            aria-label="View Nuxpert on GitHub"
          >
            View GitHub
            <Icon class="size-4" name="hugeicons:github" />
          </VButton>
          <a href="https://github.com/mfm-347/nuxpert/stargazers" target="_blank" rel="noopener">
            <img
              src="https://img.shields.io/github/stars/mfm-347/nuxpert?style=social"
              alt="GitHub stars"
            >
          </a>
        </div>
      </div>
    </section>

    <section id="problem">
      <div class="container">
        <h2 class="mx-auto">Stop Wasting Time on Boilerplate</h2>
        <p class="mx-auto max-w-2xl text-lg text-muted-foreground">
          Setting up a new Nuxt project with TypeScript, ESLint, Prettier, Tailwind, SEO, and
          performance best practices takes hours of tedious configuration. Nuxpert does it all for
          you, so you can focus on what matters: building your application.
        </p>
      </div>
    </section>

    <section id="whats-included" class="bg-accent/10">
      <div class="container">
        <h2>What's Included</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(val, i) in includedFeatures"
            :key="i"
            class="transform rounded-xl border border-border bg-card/36 p-4 text-foreground shadow-sm backdrop-blur-lg transition-all duration-200"
          >
            <span class="mb-6 grid size-10 place-items-center rounded-sm bg-primary">
              <Icon class="size-6 text-primary-foreground" :name="val.icon" />
            </span>
            <h3>{{ val.title }}</h3>
            <ul class="list-disc space-y-3">
              <li
                v-for="(feature, j) in val.features"
                :key="j"
                class="text-base text-foreground/80"
                v-html="feature"
              />
            </ul>
          </div>
        </div>
        <p class="mt-8 text-center text-base text-muted-foreground italic">
          Everything is configured for production, but stays easy to extend or remove.
        </p>
      </div>
    </section>

    <section id="who-is-nuxpert-for">
      <div class="container">
        <h2 class="mx-auto animate-in duration-1000 fade-in">Who Nuxpert Is For</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            class="rounded-lg bg-accent/10 p-6 transition-all duration-160 hover:-translate-y-0.5"
          >
            <h3>Good fit if you:</h3>
            <ul class="list-none! space-y-3">
              <li class="flex items-center gap-2">
                <Icon class="text-green-600 dark:text-green-500" name="hugeicons:tick-01" />Build
                production Nuxt applications
              </li>
              <li class="flex items-center gap-2">
                <Icon class="text-green-600 dark:text-green-500" name="hugeicons:tick-01" />Care
                about structure, performance, and maintainability
              </li>
              <li class="flex items-center gap-2">
                <Icon class="text-green-600 dark:text-green-500" name="hugeicons:tick-01" />Want
                strong defaults without heavy abstractions
              </li>
              <li class="flex items-center gap-2">
                <Icon class="text-green-600 dark:text-green-500" name="hugeicons:tick-01" />Prefer
                modern tooling and strict TypeScript
              </li>
            </ul>
          </div>
          <div
            class="rounded-lg bg-accent/10 p-6 transition-all duration-160 hover:-translate-y-0.5"
          >
            <h3>Probably not for you if you:</h3>
            <ul class="list-none! space-y-3">
              <li class="flex items-center gap-2">
                <Icon class="text-red-600 dark:text-red-500" name="hugeicons:cancel-01" />Want a
                heavy UI kit or component library
              </li>
              <li class="flex items-center gap-2">
                <Icon class="text-red-600 dark:text-red-500" name="hugeicons:cancel-01" />Prefer
                zero opinions or tutorial-style setups
              </li>
              <li class="flex items-center gap-2">
                <Icon class="text-red-600 dark:text-red-500" name="hugeicons:cancel-01" />Are
                looking for a no-code or low-code solution
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="getting-started">
      <div class="container">
        <h2 class="mx-auto animate-in duration-1000 fade-in">Getting Started</h2>
        <p class="mb-4 text-center text-muted-foreground">Start a new project in minutes:</p>
        <div class="relative mx-auto max-w-2xl">
          <pre
            class="mb-6 overflow-x-auto rounded-lg bg-secondary p-6 pr-24 text-left text-secondary-foreground"
          ><code>{{ codeSnippet }}</code></pre>
          <VButton
            class="absolute top-3 right-3 transition-all active:scale-95"
            size="sm"
            variant="outline"
            :disabled="copied"
            @click="copy"
          >
            <Icon :name="copyButtonIcon" /> {{ copyButtonText }}
          </VButton>
        </div>
        <p class="mb-6 text-center text-muted-foreground">
          That’s it. No extra configuration required.
        </p>
      </div>
    </section>

    <section id="last-section" class="bg-linear-to-b from-primary/60 to-primary/10">
      <div class="container text-center">
        <h2>Ready to build with Nuxt 4?</h2>
        <p class="mb-8 text-lg text-primary-foreground/80">
          Nuxpert gives you a clean, production-ready foundation…
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-x-4">
          <VButton
            class="transition-all duration-160 hover:scale-105"
            href="https://github.com/mfm-347/nuxpert/generate"
            target="_blank"
            rel="noopener"
          >
            Use this template
          </VButton>
          <VButton
            class="transition-all duration-160 hover:scale-105"
            variant="secondary"
            href="https://github.com/mfm-347/nuxpert"
          >
            View GitHub
          </VButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@reference "../main.css";

section {
  @apply scroll-mt-24 border-t border-border/20 first:border-t-0;
}

section .container {
  @apply px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24;
}

h2 {
  @apply mx-auto mb-8 max-w-lg scroll-m-20 px-2 pb-2 text-center text-[2.5rem]/10 font-medium tracking-tighter text-balance first:mt-0 max-sm:px-4 2xl:mt-0;
}

h3 {
  @apply mb-4 scroll-m-20 text-base/6 font-semibold tracking-tight;
}

ul {
  @apply list-inside list-disc space-y-2;
}
</style>
