import { tryResolveModule } from "nuxt/kit";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-headlessui',
    '@pinia-plugin-persistedstate/nuxt',
    "nuxt-delay-hydration"
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  build: {
    transpile: ["@nuxt/image", '@pinia/nuxt'],
  },
  runtimeConfig: {
    storeId: process.env.STORE_ID,
    apiUrl: process.env.API_URL
  },
  googleFonts: {
    subsets: 'latin',
    families: {
      Poppins: {
        wght: [600],
      },
    }
  },
  image: {

  }
})