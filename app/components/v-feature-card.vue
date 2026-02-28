<script lang="ts" setup>
import type { Feature } from '@/content/features'

defineProps<{
  feature: Feature
}>()
</script>

<template>
  <div class="group relative overflow-hidden rounded-[1.5rem] p-8 glass-card">
    <!-- Decorative blurred circle -->
    <div
      class="absolute -top-12 -right-12 size-32 rounded-full bg-primary/5 blur-3xl transition-colors group-hover:bg-primary/40"
    />

    <!-- Icon container -->
    <div
      class="mb-8 flex size-14 items-center justify-center rounded-2xl border border-border/50 bg-secondary/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
    >
      <Icon :name="feature.icon" :class="`size-7 ${feature.color}`" />
    </div>

    <!-- Title -->
    <h3 class="mb-4 text-xl font-semibold transition-colors group-hover:text-primary">
      {{ feature.title }}
    </h3>

    <!-- Description -->
    <p class="leading-relaxed font-medium text-muted-foreground">
      {{ feature.description }}
    </p>
  </div>
</template>
