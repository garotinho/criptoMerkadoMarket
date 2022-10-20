
export default {
  // ssr: false,
  // subdirectory: '/multikart',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Market - CriptoMerkado',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/multikart/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' }
    ],
    script: [
      { src: 'https://checkout.stripe.com/checkout.js'}
    ]
  },

  router: {
    // base: '/multikart/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff4c3b', throttle: 200, height: '3px', css: true },
  /*
  ** Global CSS
  */
  css: [
    'swiper/css/swiper.css',
    '~/assets/scss/app.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     { src: '~/plugins/plugin.js', ssr:false },
     { src: '~/plugins/localStorage.js', ssr:false },
     { src: '~/plugins/vuelidate.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      { path: '~/components/header/', prefix: 'Header' },
      { path: '~/components/cart-model/', prefix: 'CartModel' },
      { path: '~/components/footer/', prefix: 'Footer' },
      { path: '~/components/product-box/', prefix: 'Product' },
      { path: '~/components/widget/', prefix: 'Widget' },
    ]
  },
  
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxt/content',
    ['nuxt-lazy-load', { defaultImage: '/icon/loading.gif' }],
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'vue-scrollto/nuxt'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    //'@nuxtjs/firebase',
    '@nuxt/components',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  generate: {
    fallback: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: { compact: true }
  },
  // server: { host: '0.0.0.0', port: 3000 },
}