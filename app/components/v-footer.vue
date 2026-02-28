<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-border/40 p-6">
    <div class="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
      <div class="col-span-2 space-y-6">
        <NuxtLink to="/" class="flex cursor-pointer items-center gap-2.5">
          <VLogo />
          <span class="text-xl font-black tracking-tight">Nuxpert</span>
        </NuxtLink>
        <p class="max-w-sm leading-relaxed font-medium text-muted-foreground">
          A refined Nuxt 4 starter template with TypeScript, Tailwind CSS, SEO & accessibility—ready
          for production.
        </p>
      </div>
      <div class="space-y-6">
        <h4 class="text-xs font-black tracking-[0.2em] text-foreground/50 uppercase">Sitemap</h4>
        <ul class="space-y-4 text-sm font-bold text-muted-foreground">
          <li>
            <a href="/#features" class="cursor-pointer transition-colors hover:text-primary">
              Features
            </a>
          </li>
          <li>
            <NuxtLink to="/docs" class="transition-colors hover:text-primary">Docs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="cursor-pointer transition-colors hover:text-primary">
              About
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="space-y-6">
        <h4 class="text-xs font-black tracking-[0.2em] text-foreground/50 uppercase">Support</h4>
        <ul class="space-y-4 text-sm font-bold text-muted-foreground">
          <li>
            <NuxtLink to="/github" class="cursor-pointer transition-colors hover:text-primary">
              GitHub
            </NuxtLink>
          </li>
          <li>
            <a href="mailto:madnifm347@outlook.com" class="transition-colors hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="mx-auto my-8 flex max-w-7xl items-center justify-center border-t border-border/20 pt-12"
    >
      <p class="text-sm font-bold tracking-widest text-muted-foreground uppercase">
        &copy; {{ year }} Nuxpert. All rights reserved.
      </p>
    </div>
  </footer>
</template>
