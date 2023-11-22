export default defineNuxtConfig({
    devtools: { enabled: true },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    css: ['@/assets/styles/main.css'],
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'https://interview-api.azkiloan.com/api/v1',
        },
    },
    modules: ['@vueuse/nuxt'],
});
