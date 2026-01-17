<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    size?: string | number
  }>(),
  { size: 24 },
)
</script>

<template>
  <svg :class="props.class" :height="size" :width="size" viewBox="0 0 782.3 782.3">
    <rect class="fill-background" width="782.3" height="782.3" rx="72" ry="72" />
    <path
      d="M429.8,597.6H665a44.19,44.19,0,0,0,21.3-5.5A42.54,42.54,0,0,0,701.9,577a40.26,40.26,0,0,0,0-41.3l-158-265.5a42.54,42.54,0,0,0-15.6-15.1,43.65,43.65,0,0,0-42.6,0,42.54,42.54,0,0,0-15.6,15.1l-40.4,67.9-79-132.8a42.54,42.54,0,0,0-15.6-15.1,43.65,43.65,0,0,0-42.6,0,42.54,42.54,0,0,0-15.6,15.1L80.4,535.7a40.26,40.26,0,0,0,0,41.3A41.78,41.78,0,0,0,96,592.1a44,44,0,0,0,21.3,5.5H265c58.5,0,101.7-24.9,131.4-73.6l72-121L507,338.2,622.9,532.9H468.4ZM266.9,532.8H159.8L314.1,273.6l77,129.6-51.5,86.6c-19.7,31.5-42.1,43-76.8,43"
      fill="#00dc82"
      style="filter: drop-shadow(0 0 12px #00dc82)"
    />
  </svg>
</template>
