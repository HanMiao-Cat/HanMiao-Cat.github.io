import { defineConfig } from "vitepress";

export default defineConfig({
  title: "VitePress-Fun",
  themeConfig: {
    // logo: '/cat.png',
    siteTitle: "VitePress-Fun",
    socialLinks: [{ icon: "github", link: "https://github.com/HanMiao-Cat" }],
    nav: [
      { text: "Home", link: "/work/vue/vue3-template" },
      { text: "Guide", link: "/handbook/ConditionalTypes" },
      { text: "External", link: "https://github.com/HanMiao-Cat" },
    ],
    sidebar: {
      "/work/": [
        {
          text: 'vue',
          items: [
            { text: 'vue3-template', link: '/work/vue/vue3-template.md' },
            { text: 'vue2-template', link: '/work/vue/vue2-template.md' }
          ]
        },
        {
          text: 'node',
          link: '/work/node/node-template',
        }
      ],
    },
  },
});
