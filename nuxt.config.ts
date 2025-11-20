// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: [
    "~/assets/scss/reset.scss",
    "~/assets/scss/fonts.scss",
    "~/assets/scss/variables.scss",
    "~/assets/scss/layouts.scss",
    "~/assets/scss/base.scss",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/breakpoints.scss" as *;',
        },
      },
    },
  },

  modules: ["@nuxt/image"],
});