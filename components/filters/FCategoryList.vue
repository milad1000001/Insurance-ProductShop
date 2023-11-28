<template>
    <div class="merchants-wrapper">
        <strong class="merchants-wrapper__title"> دسته‌بندی‌ها </strong>
        <FDropDown v-for="(item, index) in categoriesItem" :key="index" :items="item" />
    </div>
</template>

<script setup lang="ts">
import type { CategoriesDetails } from '../../assets/types/index';
import { getCategories } from '../../api/index';

const categoriesItem = ref<CategoriesDetails[]>([]);

defineEmits<{
    (e: 'get-cat-id', id: number): void;
}>();

const callCategoriesAPI = async () => {
    try {
        const result = await getCategories();
        if (result.data.value) {
            const preparedCategories = mergedObject(result.data.value.data);
            categoriesItem.value = preparedCategories;
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching products:', error);
    }
};

const mergedObject = (result: CategoriesDetails[]) => {
    const convertedObject = result
        .filter((el: CategoriesDetails) => el.id !== 50)
        .reduce((organizedResult: CategoriesDetails[], item: CategoriesDetails) => {
            if (item.parent === null && item.enabled) {
                return organizedResult.concat({ ...item, children: [] });
            } else if (item.parent !== null && item.enabled) {
                const parent = organizedResult.find((el) => el.id === item.parent);
                parent!.children!.push(item);
            }
            return organizedResult;
        }, []);
    return convertedObject;
};

callCategoriesAPI();
</script>
<style lang="scss" scoped>
.merchants-wrapper {
    &__title {
        font-size: 1.2rem;
    }
}
</style>
