// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: 'vollborn.dev',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico'
        }
      ]
    }
  },
  css: [
    '@/assets/scss/main.scss'
  ],
})
