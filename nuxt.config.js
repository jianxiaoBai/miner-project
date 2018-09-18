module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '哈希宝',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '///at.alicdn.com/t/font_836410_yosiw5cddf.css' },
    ],
    script: [
      { src: '//at.alicdn.com/t/font_836410_oei8a4649k.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: [
    '~/plugins/i18n.js',
    '@/plugins/element-ui'
  ],
  router: {
    middleware: 'i18n'
  }
}

