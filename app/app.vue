<script setup lang="ts">
const clr = '#00c951'

useSeoMeta({
  viewport: 'width=device-width, initial-scale=1',
  author: 'art70x',
  creator: 'art70x',
  robots: 'index, follow',
  ogType: 'website',
  ogSiteName: 'nuxpert',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterCreator: 'art70x',
  themeColor: clr,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxpert` : 'Nuxpert'
  },
  googleSiteVerification: '9C3mmoooLN2NLh5PUEVgr98hTKYWPIarhqp7Efdfwuo',
})

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  ],
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator :color="clr" error-color="#ff6467" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
