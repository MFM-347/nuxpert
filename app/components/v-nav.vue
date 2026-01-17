<script setup lang="ts">
const isDark = useDark({ storageKey: 'v-theme' })
const toggleTheme = useToggle(isDark)
const themeLabel = `Switch to ${isDark ? 'Light' : 'Dark'} Mode`
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-foreground/5 px-4 py-2 shadow-md backdrop-blur-md"
  >
    <NuxtLink class="flex items-center gap-2" to="/">
      <VLogo :size="36" />
      <span class="text-lg font-semibold">Nuxtpret</span>
    </NuxtLink>

    <div class="flex items-center gap-2">
      <VBtn
        class="relative"
        variant="ghost"
        size="icon"
        :title="themeLabel"
        :aria-label="themeLabel"
        @click="toggleTheme()"
      >
        <Icon
          class="scale-100 rotate-0 text-xl transition-all dark:scale-0 dark:-rotate-90"
          name="carbon-moon"
        />
        <Icon
          class="absolute scale-0 rotate-90 text-xl transition-all dark:scale-100 dark:rotate-0"
          name="carbon-sun"
        />
        <span class="sr-only">Toggle theme</span>
      </VBtn>
    </div>
  </nav>

  <div class="pt-6" />
</template>
