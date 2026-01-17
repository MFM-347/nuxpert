<script setup lang="ts">
const isHovered = ref(false)
const isActive = computed(() => isHovered.value)

const now = new Date()
const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
</script>

<template>
  <div class="container flex flex-col items-center justify-center py-36 text-center">
    <article
      :class="[
        'group relative flex cursor-pointer flex-col justify-between overflow-hidden border border-border/60 p-5 transition-all duration-500',
        isActive && 'border-primary/60',
      ]"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div
        class="absolute inset-0 bg-primary/5 transition-opacity duration-500"
        :class="isActive ? 'opacity-100' : 'opacity-0'"
      />

      <div class="relative z-10">
        <span
          class="font-mono text-[12px] tracking-widest transition-colors duration-300"
          :class="isActive ? 'text-y1' : 'text-muted-foreground/80'"
          >v1.0.0</span
        >

        <h1
          class="mt-2 font-sans text-2xl tracking-tight transition-colors duration-300 md:text-3xl"
          :class="isActive ? 'text-y1' : 'text-foreground'"
        >
          Nuxpert
        </h1>
      </div>

      <div class="relative z-10">
        <p
          class="max-w-[270px] font-mono text-xs leading-relaxed text-muted-foreground transition-all duration-500"
          :class="isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'"
        >
          Nuxpert is a sleek, high-performance Nuxt 4 template with TypeScript, Tailwind CSS,
          accessibility, and SEO optimization built in.
        </p>
      </div>

      <span
        class="absolute right-4 bottom-4 font-mono text-[12px] transition-colors duration-300"
        :class="isActive ? 'text-y1' : 'text-muted-foreground/80'"
      >
        {{ date }}
      </span>

      <div
        class="absolute top-0 right-0 h-12 w-12 transition-all duration-500"
        :class="isActive ? 'opacity-100' : 'opacity-0'"
      >
        <div class="absolute top-0 right-0 h-[1px] w-full bg-primary" />
        <div class="absolute top-0 right-0 h-full w-[1px] bg-primary" />
      </div>
    </article>
  </div>
</template>
