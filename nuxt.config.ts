// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-09-01",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["@/styles.css"],
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  app: {
    head: {
      title: "Luís Silva",
      meta: [
        { name: "title", content: "Luís Silva" },
        {
          name: "description",
          content: "Olá, me chamo Luís e este é o meu curriculo.",
        },

        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://luis.lzart.com.br/" },
        { property: "og:title", content: "Luís Silva" },
        {
          property: "og:description",
          content: "Olá, me chamo Luís e este é o meu curriculo.",
        },
        { property: "og:image", content: "https://github.com/yspoof.png" },

        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://luis.lzart.com.br/" },
        { property: "twitter:title", content: "Luís Silva" },
        {
          property: "twitter:description",
          content: "Olá, me chamo Luís e este é o meu curriculo.",
        },
        { property: "twitter:image", content: "https://github.com/yspoof.png" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
