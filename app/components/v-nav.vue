<script setup lang="ts">
const colorMode = useColorMode()

/**
 * Toggles the website color theme.
 */
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const links = [
  {
    label: 'Home',
    to: '/',
    icon: 'hugeicons:home-03',
  },
  {
    label: 'About',
    to: '/about',
    icon: 'hugeicons:information-square',
  },
]
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-40 flex w-full items-center justify-between bg-foreground/5 px-4 py-1 shadow-md backdrop-blur-md"
  >
    <NuxtLink class="flex items-center gap-2" to="/">
      <VLogo :size="36" />
      <span class="text-lg font-semibold">Awesome347</span>
    </NuxtLink>

    <div class="inline-flex flex-row gap-x-1 p-1">
      <VBtn
        v-for="lnk in links"
        :key="lnk.label"
        :title="lnk.label"
        :aria-label="lnk.label"
        :to="lnk.to"
        size="icon"
        variant="ghost"
      >
        <Icon class="text-[20px]" :name="lnk.icon" />
      </VBtn>
      <VBtn
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
      </VBtn>
    </div>
  </nav>
</template>
