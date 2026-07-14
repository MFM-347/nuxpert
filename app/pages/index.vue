<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import { features } from '@/content/features'

useSeo({
  meta: {
    title: 'Nuxpert - Supercharge Your Nuxt Workflow',
    description:
      'A production-ready Nuxt 4 starter template with TypeScript, Tailwind CSS, accessibility, and SEO built in. Designed for developers who want a modern, maintainable, and performant web app from the get-go, this starter includes best practices for development, styling, and search engine optimization. Launch your Nuxt 4 project quickly without sacrificing quality or standards.',
    shortDescription:
      'Nuxt 4 starter with TypeScript, Tailwind CSS, SEO & accessibility—ready for production.',
    url: 'https://nuxpert.vercel.app/',
  },
})
useSeoMeta({ titleTemplate: '' })
defineOgImage('NuxtSeo')
</script>

<template>
  <div>
    <section id="hero" class="relative animate-in px-6 pt-32 pb-20 duration-1000 fade-in">
      <div class="mx-auto max-w-7xl flex-col items-center space-y-4 text-center">
        <div
          class="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-[11px] font-bold tracking-widest text-primary uppercase shadow-inner"
        >
          <Icon name="hugeicons:rocket-01" class="size-3.5" />
          Nuxt 4 Starter for Performance & DX
        </div>
        <h1
          class="mb-8 bg-linear-to-b from-foreground via-foreground to-foreground/60 bg-clip-text title leading-[1.05] text-transparent"
        >
          Supercharge your Nuxt workflow
        </h1>
        <p
          class="mx-auto mb-12 max-w-2xl text-lg/relaxed font-medium text-muted-foreground md:text-xl"
        >
          A refined Nuxt 4 template with TypeScript, Tailwind CSS, accessibility, and SEO baked in.
          Built for developers who value speed and best practices.
        </p>
        <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <VButton
            class="btn shadow-primary/20"
            size="lg"
            href="https://github.com/mfm-347/nuxpert/generate"
            target="_blank"
            rel="noopener"
            aria-label="Use the Nuxpert Nuxt 4 starter template"
          >
            Use this template
            <Icon class="ml-2 size-5" name="hugeicons:arrow-right-02" />
          </VButton>
          <VButton
            class="btn shadow-secondary/20"
            variant="outline"
            size="lg"
            href="https://github.com/mfm-347/nuxpert"
            target="_blank"
            rel="noopener"
            aria-label="View Nuxpert on GitHub"
          >
            View GitHub
            <Icon class="ml-2 size-5" name="hugeicons:github" />
          </VButton>
        </div>
      </div>
    </section>

    <section id="problem">
      <div class="container text-center">
        <h2>Stop Wasting Time on Boilerplate</h2>
        <p class="max-w-2xl text-lg text-muted-foreground">
          Setting up a new Nuxt project with TypeScript, ESLint, Prettier, Tailwind, SEO, and
          performance best practices takes hours of tedious configuration. Nuxpert does it all for
          you, so you can focus on what matters: building your application.
        </p>
      </div>
    </section>

    <section id="features" class="relative px-6 py-32">
      <div class="container">
        <h2>Features</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <VFeatureCard v-for="(val, i) in features" :feature="val" :key="i" />
        </div>
        <p class="mt-6 text-center text-base text-foreground/80 italic">
          Everything is configured for production, but stays easy to extend or remove.
        </p>
      </div>
    </section>

    <section class="px-6 py-24">
      <div
        class="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-12 text-center glass-card md:p-24"
      >
        <div
          class="absolute top-[-20%] right-[-10%] h-[50%] w-[50%] animate-pulse-glow rounded-full bg-primary/20 blur-[100px]"
        />
        <div
          class="absolute bottom-[-20%] left-[-10%] h-[40%] w-[40%] animate-pulse-glow rounded-full bg-secondary/10 blur-[100px]"
        />
        <div class="relative z-10 space-y-8">
          <h2 class="leading-[1.1]">Ready to build with Nuxt 4?</h2>
          <p class="mx-auto mb-10 max-w-xl text-xl/relaxed font-medium text-muted-foreground/80">
            Start with a clean, production-ready Nuxt 4 foundation and focus on building.
          </p>
          <VButton
            size="lg"
            href="https://github.com/mfm-347/nuxpert/generate"
            target="_blank"
            rel="noopener"
            class="h-16 button-hover-scale border-none px-12 text-xl font-black shadow-2xl shadow-primary/30 primary-gradient"
          >
            Try it now — for free
          </VButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@reference "@/main.css";

#hero .btn {
  @apply px-8 text-base shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95;
}

h2 {
  @apply mx-auto mb-6 max-w-lg scroll-m-20 px-2 pb-2 text-center text-4xl font-medium tracking-tight text-balance first:mt-0 max-sm:px-4 md:text-5xl 2xl:mt-0;
}

h3 {
  @apply mb-4 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl;
}
</style>
