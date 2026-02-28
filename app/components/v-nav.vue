<script setup lang="ts">
const colorMode = useColorMode()

/**
 * Toggles the website color theme.
 */
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl"
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
      <NuxtLink to="/" class="group flex items-center gap-2.5">
        <VLogo />
        <span
          class="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent"
        >
          Nuxpert
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-10 text-sm font-medium text-muted-foreground md:flex">
        <NuxtLink
          to="/#features"
          class="group relative py-2 transition-colors hover:text-foreground"
        >
          Features
          <span
            class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"
          />
        </NuxtLink>
        <NuxtLink to="/docs" class="group relative py-2 transition-colors hover:text-foreground">
          Docs
          <span
            class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"
          />
        </NuxtLink>
        <NuxtLink to="/about" class="group relative py-2 transition-colors hover:text-foreground">
          About
          <span
            class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"
          />
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <VButton
          size="sm"
          href="https://github.com/mfm-347/nuxpert/generate"
          class="shadow-md shadow-primary/10 transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          Use this template
          <Icon name="hugeicons:arrow-right-02" class="size-5" />
        </VButton>
        <VButton
          size="icon"
          variant="ghost"
          title="Toggle Theme"
          aria-label="Toggle Theme"
          @click="toggleTheme()"
        >
          <Icon
            class="scale-100 rotate-0 text-[20px] transition-all dark:scale-0 dark:-rotate-90"
            aria-hidden="true"
            name="hugeicons:moon-02"
          />
          <Icon
            class="absolute scale-0 rotate-90 text-[20px] transition-all dark:scale-100 dark:rotate-0"
            aria-hidden="true"
            name="hugeicons:sun-02"
          />
        </VButton>
      </div>
    </div>
  </header>
</template>
