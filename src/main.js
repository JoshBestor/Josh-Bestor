// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: 'author',
    content: 'Josh Bestor'
  })

  head.meta.push({
    name: 'description',
    content: 'The official website of the Electrical and Computer Engineer Josh Bestor.'
  })

  head.link.push({
    rel: 'icon',
    href: '/icons/Icon.png',
    color: '#62615a'
  })
}
