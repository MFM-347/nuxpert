<script setup lang="ts">
useSeo({
    title: 'About',
    description:
      'Nuxpert is a production-ready Nuxt 4 starter template designed to help developers launch web applications quickly and efficiently. It comes with TypeScript for scalable code, Tailwind CSS for rapid styling, accessibility best practices, and SEO optimizations out of the box. With Nuxpert, you can skip repetitive setup and focus on building high-quality, modern web apps from day one.',
    shortDescription:
      'Nuxt 4 starter template with TypeScript, Tailwind CSS, accessibility & SEO—ready for production.',
    url: 'https://nuxpert.vercel.app/about',
})
</script>

<template>
  <div class="container mt-20 max-w-3xl">
    <div class="text-center">
      <h1 class="animate-in title duration-200 fade-in">About Nuxpert</h1>
      <p class="mt-4 animate-in text-lg text-foreground/80 duration-200 fade-in">
        Nuxpert is a high-performance Nuxt 4 starter template designed to supercharge your
        development workflow. It comes pre-configured with a modern tech stack to help you build
        fast, accessible, and SEO-friendly web applications.
      </p>
    </div>

    <div class="mt-12">
      <h2 class="animate-in text-2xl font-semibold duration-200 fade-in">Our Philosophy</h2>
      <p class="mt-4 animate-in text-foreground/90 duration-200 fade-in">
        We believe that developers shouldn't have to waste hours on repetitive setup and
        configuration. Nuxpert provides a solid, opinionated foundation so you can skip the
        boilerplate and start building your actual product features from day one. Our focus is on
        providing strong defaults for performance, accessibility, and developer experience without
        locking you into a heavy, inflexible framework.
      </p>

      <h2 class="mt-12 animate-in text-2xl font-semibold duration-200 fade-in">
        License Information
      </h2>
      <div class="mt-4 animate-in rounded-lg border bg-accent/20 p-6 duration-200 fade-in">
        <p class="font-semibold">MIT License</p>
        <p class="mt-2 text-muted-foreground">Copyright (c) 2025 Farhan Madni</p>
        <p class="mt-4 text-sm text-muted-foreground">
          The Nuxpert template is released under the MIT License. This means you are free to use,
          copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.
          For the full license text, please refer to the LICENSE file in the repository.
        </p>
        <VButton
          class="mt-6"
          variant="outline"
          href="https://github.com/mfm-347/nuxpert/blob/main/LICENSE"
          target="_blank"
          rel="noopener"
        >
          View License on GitHub
          <Icon class="size-5" name="hugeicons:arrow-right-02" />
        </VButton>
      </div>
    </div>
  </div>
</template>
