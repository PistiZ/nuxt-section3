const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'WD Blog',
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'My cool Nuxt.js dev practice project'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Open+Sans'
            }
        ]
    },

    /*
    ** Customize the progress-bar color
    *  disabling: "loading: false"
    */
    loading: {
        color: 'red',
        height: '4px',
        failedColor: 'blue',
        duration: 5000
    },

    /*
    ** Global CSS
    */
    css: [
        '~assets/styles/main.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~plugins/core-components.js',
        '~plugins/date-filter.js'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios'
    ],

    axios: {
        baseURL: process.env.BASE_URL ||  'https://nuxt-blog-1005d.firebaseio.com',
        credentials: false
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    },

    env: {
        baseUrl: process.env.BASE_URL ||  'https://nuxt-blog-1005d.firebaseio.com'
    },

    // router: {
        // extendRoutes(routes, resolve) {
        //     routes.push({
        //         path: '*',
        //         component: resolve(__dirname, 'pages/index.vue')
        //     })
        // },
        // linkActiveClass: 'active'
    // }

    transition: {
        name: 'fade',
        mode: 'out-in'
    }
};
