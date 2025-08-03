// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Kaprizo',
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      ],
      meta: [
        {name: 'description', content: 'Kaprizo'},
        {name: 'viewport', content: 'width=device-width,initial-scale=1'}
      ],
    },
  },

  image: {
    format: ['webp']
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },

  googleFonts: {
    families: {
      Roboto: true,
      Oswald: true,
    }
  }
})