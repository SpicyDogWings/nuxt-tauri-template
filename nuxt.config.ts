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
    "~/assets/css/main.css"
  ],
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
    },
    plugins: [
      tailwindcss(),
    ]
  },
  devServer: {
    host: '0',
  },
  modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/ui"],
  ignore: ['**/src-tauri/**'],
})