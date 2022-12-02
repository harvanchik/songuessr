// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  target: "static",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],
});
