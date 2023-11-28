<template>
    <div ref="el" class="product-list">
        <ProductItem v-for="(item, index) in productsItem" :key="index" class="product-list__item" :details="item" />
    </div>
</template>

<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core';
import { getProduct } from '../../api/index';
import type { ProductItemType } from '../../assets/types/index';
const productsItem = ref<ProductItemType[]>([]);
const pageNumber = ref(1);

const getProducts = async (page: number = pageNumber.value, productId: number | null = null) => {
    try {
        const result = await getProduct(page, productId);
        if (result.data.value) {
            productsItem.value = [...productsItem.value, ...result.data.value.data];
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching products:', error);
    }
};

const infiniteScrollHandler = () => {
    if (productsItem.value.length) {
        pageNumber.value++;
        getProducts();
    }
};

watchEffect(() => {
    const selectedProductId: Ref<number> = useState('productId');
    pageNumber.value = 1;
    getProducts(pageNumber.value, selectedProductId.value);
});

getProducts();

const el = ref<HTMLElement | null>(null);
useInfiniteScroll(el, infiniteScrollHandler, { distance: 5, direction: 'bottom' });
onUnmounted(() => {
    if (el.value) {
        el.value.removeEventListener('scroll', infiniteScrollHandler);
    }
});
</script>

<style lang="scss" scoped>
.product-list {
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.5rem;
    width: 100%;
    height: 900px;
    overflow-y: scroll;
    &__item {
        gap: 1rem;
        box-sizing: border-box;
        border: 1px solid #11111122;
        border-radius: 0.5rem;
        padding: 1rem;
        height: 350px;
    }
    &::-webkit-scrollbar {
        maring: 200px;
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: #ccc;
        padding: 10px 0;
    }
}
</style>
