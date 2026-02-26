interface Meta {
  title?: string
  description?: string
  url?: string
  author?: string
}

interface Icons {
  favicon?: string
  icon?: string
  appleTouchIcon?: string
}

interface useSeoOptions {
  meta?: Meta
  icons?: Icons
}

export function useSeo(options: useSeoOptions) {
  const { meta, icons } = options

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
    themeColor: '#1447e6',
  })

  useHead({
    htmlAttrs: { lang: 'en' },
    link: [
      { rel: 'canonical', href: meta?.url },
      ...(icons?.favicon ? [{ rel: 'icon', type: 'image/x-icon', href: icons.favicon }] : []),
      ...(icons?.icon ? [{ rel: 'icon', type: 'image/svg+xml', href: icons.icon }] : []),
      ...(icons?.appleTouchIcon
        ? [{ rel: 'apple-touch-icon', sizes: '180x180', href: icons.appleTouchIcon }]
        : []),
    ],
  })
}
