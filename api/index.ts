import { useAsyncData } from 'nuxt/app';
import type { MerchantsDetails, ProductDetails, CategoriesDetails } from '../assets/types/index';

export const getProduct = async (page: any) => {
    const config = useRuntimeConfig();
    return await useAsyncData<ProductDetails>('products', () =>
        $fetch(`${config.public.baseURL}/products`, { method: 'POST', params: { size: 10, page } }),
    );
};

export const getMerchants = async () => {
    const config = useRuntimeConfig();
    return await useAsyncData<MerchantsDetails>('merchants', () =>
        $fetch(`${config.public.baseURL}/merchants`, { method: 'GET' }),
    );
};

export const getCategories = async () => {
    const config = useRuntimeConfig();
    return await useAsyncData<CategoriesDetails>('categories', () =>
        $fetch(`${config.public.baseURL}/categories`, { method: 'GET' }),
    );
};
