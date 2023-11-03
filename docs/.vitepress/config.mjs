import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Luke Garzia',
  description: "Luke Garzia's personal site - my collection of learnings, notes & projects",
  head: [['link', { rel: 'icon', type: "image/x-icon", href: '/favicon.ico' }]],
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo: '/logo.png',
    siteTitle: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lgarzia?tab=repositories' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/luke-garzia/' }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', 
      items: [
        {text: 'Overview', link: '/notes/' },
        {text: 'Readings', link: '/notes/readings/' },
        {text: 'GCP', link: '/notes/gcp/' },
        {text: 'Python', link: '/notes/python/' }
      ]},
    ],
//https://vitepress.dev/reference/default-theme-sidebar#the-basics
    sidebar: [
      {
        text: 'All Notes',
        items: [
          {text: 'Overview', link: '/notes/'},
          {
            text: 'Topics',
            items: [
              { text: 'Readings', link: '/notes/readings/' },
              { text: 'GCP', link: '/notes/gcp/'},
              { text: 'Python', link: '/notes/python/'}
            ]
          }
        ]
      }
      ]
    }
  })
