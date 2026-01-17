import type { useSeoOpts } from '@/types/seo'

export function useSeo(opts: useSeoOpts) {
  const { meta, icons } = opts

  const m = meta && {
    title: meta.title,
    description: meta.description,
    ogTitle: meta.title,
    twitterTitle: meta.title,
    ogDescription: meta.description,
    twitterDescription: meta.description,
    author: meta.author,
    creator: meta.author,
    twitterCreator: meta.author ? `@${meta.author}` : undefined,
    ogUrl: meta.url,
  }

  useSeoMeta({
    ...m,
    robots: 'index, follow',
    ogType: 'website',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    themeColor: '#3f79ff',
  })

  useHead({
    htmlAttrs: { lang: 'en' },
    link: icons
      ? [
          icons.favicon ? { rel: 'icon', type: 'image/x-icon', href: icons.favicon } : {},
          icons.icon ? { rel: 'icon', type: 'image/svg+xml', href: icons.icon } : {},
          icons.appleTouchIcon
            ? { rel: 'apple-touch-icons', sizes: '180x180', href: icons.appleTouchIcon }
            : {},
        ]
      : [],
  })
}
