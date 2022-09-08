import { defineNuxtConfig } from "nuxt";
// import tailwindModule from "../src/module";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  router: {
    base: "./",
  },
  typescript: {
    shim: false,
  },
  target: "static",
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
});
