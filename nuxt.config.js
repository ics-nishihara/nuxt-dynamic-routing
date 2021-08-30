export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-dynamic-routing',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  router: {
    base: '/nuxt-dynamic-routing',
  },
  generate: {
    dir: 'docs',
    crawler: false,
    routes: [
      '/validated_posts/1',
      '/validated_posts/2',
      '/validated_posts/3',
      '/validated_posts/4',
      '/validated_posts/5',
      '/validated_posts/6',
      '/validated_posts/7',
      '/validated_posts/8',
      '/validated_posts/9',
      '/validated_posts/10',
      '/no_validated_posts/11',
      '/no_validated_posts/12',
      '/no_validated_posts/13',
      '/no_validated_posts/14',
      '/no_validated_posts/15',
      '/no_validated_posts/16',
      '/no_validated_posts/17',
      '/no_validated_posts/18',
      '/no_validated_posts/20',
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/http',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
