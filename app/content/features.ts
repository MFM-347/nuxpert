export interface Feature {
  icon: string
  title: string
  color: string
  description: string
}

export const features: Feature[] = [
  {
    icon: 'hugeicons:cpu',
    title: 'Core',
    color: 'text-indigo-600 dark:text-indigo-500',
    description:
      'Built with Nuxt 4 and Vue 3, leveraging full SSR, SSG, hybrid rendering, and strict TypeScript for robust, error-free development.',
  },
  {
    icon: 'hugeicons:css-3',
    title: 'Styling',
    color: 'text-sky-600',
    description:
      'Clean and minimal styling powered by Tailwind CSS, with a global CSS entry for easy customization and fast startup.',
  },
  {
    icon: 'hugeicons:analytics-01',
    title: 'SEO & Performance',
    color: 'text-emerald-600 dark:text-emerald-500',
    description:
      'Optimized for search engines and fast load times with automatic sitemap and Open Graph generation, pre-rendered critical routes, and smart asset caching.',
  },
  {
    icon: 'hugeicons:universal-access-circle',
    title: 'Accessibility',
    color: 'text-amber-600 dark:text-amber-500',
    description:
      'Accessibility-first design with Nuxt A11y module, accessible defaults, and ARIA patterns built in.',
  },
  {
    icon: 'hugeicons:computer-terminal-02',
    title: 'Developer Experience',
    color: 'text-violet-600 dark:text-violet-500',
    description:
      'Enhanced DX with ESLint, Nuxt DevTools, auto-imported VueUse utilities, Iconify icons, and preloaded optimized fonts.',
  },
  {
    icon: 'hugeicons:tools',
    title: 'Tooling',
    color: 'text-rose-600 dark:text-rose-500',
    description:
      'Modern developer tooling with PNPM-first workflow, Prettier formatting, and a Vite-based build pipeline for fast development.',
  },
]
