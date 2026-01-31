<script setup lang="ts">
useSeo({
  meta: { author: 'art70x' },
  icons: { favicon: '/favicon.ico', icon: '/icon.svg', appleTouchIcon: '/apple-touch-icon.png' },
})

useSeoMeta({ googleSiteVerification: '9C3mmoooLN2NLh5PUEVgr98hTKYWPIarhqp7Efdfwuo' })
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#1447e6" error-color="#ff6467" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
