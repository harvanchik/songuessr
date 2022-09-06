import { defineNuxtConfig } from "nuxt";
// import tailwindModule from "../src/module";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  // modules: ["@nuxt/content", tailwindModule],
  tailwindcss: {
    exposeConfig: true,
    injectPosition: "last",
  },
  content: {
    documentDriven: true,
  },
});
