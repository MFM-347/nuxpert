<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
    class?: HTMLAttributes['class']
    radius?: string
  }>(),
  {
    variant: 'default',
    size: 'default',
    radius: 'rounded-md',
  },
)
</script>

<template>
  <button
    :class="['btn', props.radius, props.class]"
    :data-variant="props.variant"
    :data-size="props.size"
  >
    <slot />
  </button>
</template>

<style scoped>
@reference "@/main.css";

.btn {
  @apply inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4;

  &[data-variant='default'] {
    @apply bg-primary text-primary-foreground hover:bg-primary/90;
  }

  &[data-variant='destructive'] {
    @apply bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40;
  }

  &[data-variant='outline'] {
    @apply border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50;
  }

  &[data-variant='secondary'] {
    @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
  }

  &[data-variant='ghost'] {
    @apply hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50;
  }

  &[data-variant='link'] {
    @apply text-primary underline-offset-4 hover:underline;
  }

  &[data-size='default'] {
    @apply h-9 px-4 py-2 has-[>svg]:px-3;
  }

  &[data-size='sm'] {
    @apply h-8 gap-1.5 px-3 has-[>svg]:px-2.5;
  }

  &[data-size='lg'] {
    @apply h-10 px-6 has-[>svg]:px-4;
  }

  &[data-size='icon'] {
    @apply size-9;
  }

  &[data-size='icon-sm'] {
    @apply size-8;
  }

  &[data-size='icon-lg'] {
    @apply size-10;
  }
}
</style>
