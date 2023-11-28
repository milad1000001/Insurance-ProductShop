<template>
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
</template>

<script setup lang="ts">
import type { MerchantsDetails } from '../../assets/types/index';
import { getMerchants } from '../../api/index';

const merchantsItems = ref<MerchantsDetails[]>([]);
const filteredFilters = ref();
const inputValue = ref();
const checkBoxValue = ref([]);

const callMerchantsAPI = async () => {
    try {
        const result = await getMerchants();
        if (result.data.value) {
            merchantsItems.value = result.data.value.data;
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching products:', error);
    }
};

watchEffect(() => {
    if (merchantsItems.value && inputValue.value) {
        filteredFilters.value = merchantsItems.value.filter((el) => {
            return el.name.includes(inputValue.value);
        });
    } else {
        filteredFilters.value = merchantsItems.value;
    }
});
callMerchantsAPI();
</script>

<style scoped lang="scss">
.merchants-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'alibaba';
    &__item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-height: 300px;
        overflow-y: scroll;
    }
}
</style>
