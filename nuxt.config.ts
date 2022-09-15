import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  target: "static",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],
});

document.getElementById("novice").onclick = function () {
  location.href = "www.songuessr.com/genre";
};
document.getElementById("insane").onclick = function () {
  location.href = "www.songuessr.com/genre";
};
document.getElementById("lightning").onclick = function () {
  location.href = "www.songuessr.com/genre";
};