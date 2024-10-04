import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-CO",
};

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  integrations: [i18n({
    locales,
    defaultLocale,
  }), 
  sitemap({
    i18n: {
      locales,
      defaultLocale,
    },
    filter: filterSitemapByDefaultLocale({ defaultLocale }),
  }),
  tailwind()],
  output: 'server',
  adapter: vercel(),
});