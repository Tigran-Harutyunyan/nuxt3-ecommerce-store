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
    '@pinia-plugin-persistedstate/nuxt'
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
    transpile: ['vue-clerk', '@clerk/clerk-js', "@nuxt/image", '@pinia/nuxt'],
  },
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
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