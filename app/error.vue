<script setup lang="ts">
import type { NuxtError } from '#app'

const properties = defineProps<{
  error: NuxtError
}>()

const status = computed(() => properties.error.status || 500)
const statusText = computed(() => {
  if (properties.error.statusText) return properties.error.statusText
  switch (status.value) {
    case 404: {
      return 'Page not found'
    }
    case 500: {
      return 'Internal server error'
    }
    case 503: {
      return 'Service unavailable'
    }
    default: {
      return 'Something went wrong'
    }
  }
})

useHead({
  title: `${status.value} - ${statusText.value}`,
})

defineOgImage('nuxt-seo', {
  title: props.error.statusCode.toString(),
  description: props.error.statusText
})
</script>

<template>
  <div class="flex min-h-dvh flex-col bg-background">
    <div class="text-foreground lg:mx-10 lg:border-x">
      <div class="flex h-[calc(100vh-4.01rem)] items-center justify-center border-x">
        <div
          class="flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row"
        >
          <h1
            class="text-2xl font-extrabold tracking-tight sm:mr-6 sm:border-r sm:pr-6 sm:text-3xl"
          >
            {{ error.status ?? '404' }}
          </h1>
          <h2 class="mt-2 text-muted-foreground sm:mt-0">
            {{ error.statusText || 'This page could not be found.' }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
