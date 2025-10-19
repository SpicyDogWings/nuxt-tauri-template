// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  css: [
    "~~/assets/css/main.css"
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/ui"],
})