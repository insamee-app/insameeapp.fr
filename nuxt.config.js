export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'InsameeApp',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'InsameeApp' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        // content: 'https://insamee.fr/img/social/insamee.jpg',
      },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'InsameeApp' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@soubiran25' },
      {
        hid: 'twitter:image',
        property: 'og:image',
        // content: 'https://insamee.fr/img/social/insamee.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        rel: 'stylesheet',
        href:
          // eslint-disable max-len
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700;900&display=swap',
      },
    ],

    bodyAttrs: {
      class: 'antialiased',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/analytics.client.js'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms',
    '~/components/atoms/icons',
    '~/components/atoms/graphics',
    '~/components/atoms/blobs',
    '~/components/molecules',
    '~/components/molecules/animations',
    '~/components/organisms',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module',
    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
  ],

  pwa: {
    manifest: {
      name: 'InsameeApp',
      short_name: 'InsameeApp',
      description: "L'écosystème de mise en relation étudiante",
      background_color: '#FFFFFF',
      theme_color: '#FFFFFF',
    },
    icon: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://motion.vueuse.org/installation.html#nuxt-module
    'nuxt-use-motion',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
