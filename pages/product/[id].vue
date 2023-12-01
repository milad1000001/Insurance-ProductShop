<template>
    <div class="product-filtered-list">
        <ProductItem
            v-for="(item, index) in productsItem"
            :key="index"
            class="product-filtered-list__item"
            :details="item"
        />
    </div>
</template>

<script setup lang="ts">
import type { ProductItemType } from '../../assets/types/index';
import { getProduct } from '~/api';

const getProducts = async (page: number = 1, productId: number) => {
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

const route = useRoute();
const productId: Ref<number> = ref(Number(route.params.id));
getProducts(1, productId.value);
const productsItem = ref<ProductItemType[]>([]);
</script>

<style lang="scss" scoped>
.product-filtered-list {
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.5rem;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    &__item {
        gap: 1rem;
        box-sizing: border-box;
        border: 1px solid #11111122;
        border-radius: 0.5rem;
        padding: 1rem;
        height: 350px;
    }
}
</style>
