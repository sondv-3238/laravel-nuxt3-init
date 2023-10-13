// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  srcDir: path.resolve(__dirname, 'app'),
  css: [
      'vuetify/styles',
  ],

  app: {
      head: {
          title: 'Laravel Nuxt 3 Starter',
          titleTemplate: '%s - Laravel Nuxt 3 Starter',
          meta: [
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              {
                  hid: 'description',
                  name: 'description',
                  content: 'Laravel Nuxt 3 Starter',
              },
          ],
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      },
  },
  css: ['./assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
