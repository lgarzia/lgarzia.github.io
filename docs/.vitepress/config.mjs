import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Luke Garzia",
  description: "Collection of items written by Luke Garzia",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes/' }
    ],

    sidebar: {
      '/notes/': {
        items: [
          { text: 'Google Cloud Platform', link: '/notes/gcp/'},
          { text: 'Python', link: '/notes/python/'}          
        ]
      },
      '/notes/gcp/': [
      {
        text: 'GCP',
        items: [
          { text: 'Analytics Lake House', link: '/notes/gcp/analytic-lakehouse'},
        ]
      }],
      '/notes/python/':[
      {
        text: 'Python',
        items: [
          { text: 'Libraries Explored', link: '/notes/python/python-libraries'}
        ]
      }]
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
