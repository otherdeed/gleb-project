import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    'nuxt-icons',
  ],
  css: [
    './app/assets/css/main.css',
    './app/assets/css/fonts.css',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
