import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Luke Garzia",
  description:
    "Luke Garzia's personal site - my collection of learnings, notes & projects",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    logo: "/logo.png",
    siteTitle: false,
    socialLinks: [
      { icon: "github", link: "https://github.com/lgarzia?tab=repositories" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/luke-garzia/" },
    ],
    nav: [
      { text: "Home", link: "/" },
      { text: "About me", link: "/about_me/" },
      {
        text: "Journal",
        items: [
          { text: "Overview", link: "/notes/" },
          { text: "Readings", link: "/notes/readings/" },
          { text: "Analytics", link: "/notes/analytics/" },
          { text: "Engineering", link: "/notes/engineering/" },
          { text: "AI Engineering", link: "/notes/llm/" },
          { text: "GCP", link: "/notes/gcp/" },
          { text: "Python", link: "/notes/python/" },
          { text: "Leadership", link: "/notes/leadership/" },
        ],
      },
    ],
    //https://vitepress.dev/reference/default-theme-sidebar#the-basics
    sidebar: [
      {
        text: "All Notes",
        items: [
          { text: "Overview", link: "/notes/" },
          {
            text: "Topics",
            items: [
              {
                text: "Readings",
                collapsed: false,
                items: [
                  {
                    text: "Overview",
                    link: "/notes/readings/",
                  },
                  {
                    text: "Weekly Recaps",
                    collapsed: true,
                    items: [
                      {
                        text: "2024-01-15",
                        link: "/notes/readings/2024_01_15",
                      },
                      {
                        text: "2024-01-22",
                        link: "/notes/readings/2024_01_22",
                      },
                      {
                        text: "2024-01-29",
                        link: "/notes/readings/2024_01_29",
                      },
                      ,
                      {
                        text: "2024-02-05",
                        link: "/notes/readings/2024_02_05",
                      },
                    ],
                  },
                ],
              },
              { text: "Analytics", link: "/notes/analytics/" },
              { text: "Engineering", link: "/notes/engineering/" },
              { text: "AI Engineering", link: "/notes/llm/" },
              { text: "GCP", link: "/notes/gcp/" },
              {
                text: "Python",
                collapsed: true,
                items: [
                  { text: "Overview", link: "/notes/python/" },
                  { text: "Chart Me", link: "/notes/python/chart-me" },
                  { text: "Libraries", link: "/notes/python/python-libraries" },
                  {
                    text: "References",
                    link: "/notes/python/references",
                  },
                ],
              },
              { text: "Leadership", link: "/notes/leadership/" },
            ],
          },
        ],
      },
    ],
  },
});
