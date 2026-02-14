<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border bg-primary/10 py-8">
    <div
      class="container mx-auto flex flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between"
    >
      <p class="text-base text-foreground/80">
        &copy; {{ year }} <span class="font-semibold text-foreground/90">MFM-347</span>. All rights
        reserved.
      </p>

      <nav class="flex flex-wrap items-center gap-5 text-base" aria-label="Footer navigation">
        <NuxtLink
          class="text-foreground/80 transition-colors hover:text-foreground/90 hover:underline"
          to="/about"
        >
          About
        </NuxtLink>
        <NuxtLink
          class="text-foreground/80 transition-colors hover:text-foreground/90 hover:underline"
          to="/github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>
