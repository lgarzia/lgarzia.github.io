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
                text: "Analytics",
                collapsed: true,
                items: [
                  { text: "Overview", link: "/notes/analytics/" },
                  { text: "Link-a-thon", link: "/notes/analytics/link-a-thon" },
                ],
              },
              {
                text: "Engineering",
                collapsed: true,
                items: [
                  { text: "Overview", link: "/notes/engineering/" },
                  {
                    text: "Link-a-thon",
                    link: "/notes/engineering/link-a-thon",
                  },
                  {
                    text: "Rust",
                    link: "/notes/engineering/rust",
                  },
                ],
              },
              {
                text: "AI Engineering",
                collapsed: true,
                items: [
                  { text: "Overview", link: "/notes/llm/" },
                  { text: "Link-a-thon", link: "/notes/llm/link-a-thon" },
                ],
              },
              {
                text: "GCP",
                collapsed: true,
                items: [
                  { text: "Overview", link: "/notes/gcp/" },
                  { text: "Link-a-thon", link: "/notes/gcp/link-a-thon" },
                  {
                    text: "DevOps Cert.",
                    link: "/notes/gcp/devop-cert",
                  },
                ],
              },
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
                  { text: "Link-a-thon", link: "/notes/python/link-a-thon" },
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
