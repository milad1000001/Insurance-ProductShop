import { useAsyncData } from 'nuxt/app';
import type { MerchantsDetails, ProductItemType, CategoriesDetails } from '../assets/types/index';

export const getProduct = async (page: number, productId: number | null = null) => {
    const config = useRuntimeConfig();
    return await useAsyncData<ProductItemType>('products', () =>
        $fetch(`${config.public.baseURL}/products${productId ? '/' + productId : ''}`, {
            method: 'POST',
            params: { size: 20, page },
        }),
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
