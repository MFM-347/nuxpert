<template>
  <div class="container grid place-items-center py-12">
    <article
      class="group relative flex cursor-pointer flex-col justify-between overflow-hidden border border-border/60 p-5 transition-all duration-500 group-hover:border-primary/60"
    >
      <div
        class="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div class="relative z-10">
        <span
          class="font-mono text-[12px] tracking-widest text-muted-foreground/90 transition-colors duration-300 group-hover:text-y1"
          >v1.1.0</span
        >

        <h1
          class="max-w-lg px-2 text-2xl font-medium tracking-tight text-balance text-foreground transition-colors duration-300 group-hover:text-y1 max-sm:px-4 md:text-3xl 2xl:mt-0"
        >
          Nuxpert
        </h1>
      </div>

      <div class="relative z-10">
        <p
          class="max-w-[270px] translate-y-2 font-mono text-xs leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Nuxpert is a sleek, high-performance Nuxt 4 template with TypeScript, Tailwind CSS,
          accessibility, and SEO optimization built in.
        </p>
      </div>

      <span
        class="font-mono text-[12px] tracking-widest text-muted-foreground/90 transition-colors duration-300 group-hover:text-y1"
      >
        2/1/2026
      </span>

      <div
        class="absolute top-0 right-0 h-12 w-12 opacity-0 transition-all duration-500 group-hover:opacity-100"
      >
        <div class="absolute top-0 right-0 h-[1px] w-full bg-primary" />
        <div class="absolute top-0 right-0 h-full w-[1px] bg-primary" />
      </div>
    </article>
  </div>
</template>
