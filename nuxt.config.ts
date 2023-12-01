export default defineNuxtConfig({
    devtools: { enabled: true },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    css: ['@/assets/styles/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'https://interview-api.azkiloan.com/api/v1',
        },
    },
    modules: ['@vueuse/nuxt', 'nuxt-icons'],
    router: {
        extendRoutes(routes, resolve) {
            routes.push(
                {
                    name: 'home',
                    path: '*',
                    file: () => resolve(__dirname, 'pages/product/index.vue'),
                },
                {
                    name: 'product',
                    path: 'product/:id',
                    component: () => resolve(__dirname, 'pages/product/index.vue'),
                },
            );
        },
    },
    routeRules: {
        '/': { redirect: '/product' },
    },
});
