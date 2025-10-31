<template>
  <section
    class="flex flex-col items-center justify-center bg-gradient-to-b from-background via-background/95 to-background px-6 py-20 text-center"
  >
    <h1 class="my-4 scroll-m-20 px-5 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
      <span
        class="bg-gradient-to-b from-primary from-0% to-primary/40 to-100% bg-clip-text text-transparent"
        >VNT</span
      >
      -
      <span
        class="bg-gradient-to-b from-green-600 from-0% to-green-600/40 to-100% bg-clip-text text-transparent dark:from-green-400 dark:to-green-400/40"
      >
        Vue
      </span>
      +
      <span
        class="bg-gradient-to-b from-emerald-600 from-0% to-emerald-600/40 to-100% bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-400/40"
      >
        Nuxt
      </span>
      +
      <span
        class="bg-gradient-to-b from-sky-600 from-0% to-sky-600/40 to-100% bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-400/40"
      >
        Tailwind
      </span>
    </h1>

    <p class="mb-10 max-w-2xl text-lg text-muted-foreground">
      Build lightning-fast Nuxt apps with TypeScript, Tailwind CSS, and best practices mixed in.
    </p>

    <div class="flex flex-wrap justify-center gap-4" data-id="cta">
      <VBtn variant="primary" aria-label="Use this template on GitHub">
        <a href="https://github.com/MFM-347/VNT/generate" target="_blank" rel="noopener noreferrer">
          Use This Template
        </a>
      </VBtn>
      <NuxtLink to="/about"
        ><VBtn variant="secondary" aria-label="Learn more about VNT"> Learn More </VBtn></NuxtLink
      >
    </div>
  </section>
</template>

<script setup lang="ts">
useSEO({
  title: 'VNT - Modern Nuxt 4 Template',
  description:
    'VNT is a modern, SEO-friendly Nuxt 4 starter template with TypeScript, Tailwind CSS, and accessibility built in.',
  url: 'https://vnt3.vercel.app/',
})

defineOgImageComponent('Nuxt', {
  title: 'VNT - Modern Nuxt 4 Template',
  description: 'A modern, accessible Nuxt 4 starter built with Tailwind and TypeScript.',
  theme: '#3d61ff',
})
</script>
