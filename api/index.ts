import { useAsyncData } from 'nuxt/app';
export const getProduct = async (page: any) => {
    const config = useRuntimeConfig();
    return await useAsyncData('products', () =>
        $fetch(`${config.public.baseURL}/products`, { method: 'POST', params: { size: 10, page } }),
    );
};
