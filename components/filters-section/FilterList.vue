<template>
    <div class="filter-wrapper">
        <strong> فیلترها </strong>
        <section class="merchants-wrapper">
            <strong> دسته‌بندی‌ها </strong>
            <div v-for="(item, index) in Object.keys(categoriesItem)" :key="index">
                <BaseDropdown :head-title="item">
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </BaseDropdown>
            </div>
        </section>
        <hr class="filter-wrapper__line" />
        <section class="merchants-wrapper">
            <strong> جستجوی فروشگاه‌ها </strong>
            <BaseInput v-model:modelValue="inputValue" placeholder="فروشگاه" />
            <div class="merchants-wrapper__item">
                <BaseCheckbox
                    v-for="(item, index) in filteredFilters"
                    :key="index"
                    v-model="checkBoxValue"
                    :label="item.name"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { MerchantsDetails, CategoriesDetails } from '../../assets/types/index';
import { getMerchants, getCategories } from '../../api/index';

const merchantsItem = ref();
const categoriesItem = ref();
const filteredFilters = ref(merchantsItem.value);
const inputValue = ref();
const checkBoxValue = ref(null);

watchEffect(() => {
    if (merchantsItem.value && inputValue.value) {
        filteredFilters.value = merchantsItem.value.filter((el) => {
            return el.name.includes(inputValue.value);
        });
    } else {
        filteredFilters.value = merchantsItem.value;
    }
});

const callMerchantsAPI = async () => {
    try {
        const result = await getMerchants();
        merchantsItem.value = result.data.value.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching products:', error);
    }
};

const callCategoriesAPI = async () => {
    try {
        const result = await getCategories();
        categoriesItem.value = mergedObject(result.data.value.data);
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
callMerchantsAPI();
callCategoriesAPI();
</script>

<style lang="scss" scoped>
.filter-wrapper {
    display: flex;
    flex: 1 0 240px;
    flex-direction: column;
    gap: 0.5rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 1rem;

    &__line {
        border: 1px solid #eee;
    }
}
.merchants-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    &__item {
        height: 200px;
        overflow-y: scroll;
    }
}
</style>
