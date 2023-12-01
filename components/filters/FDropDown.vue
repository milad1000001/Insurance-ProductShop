<template>
    <div class="base-dropdown">
        <div class="base-dropdown__title" @click="isOpen = !isOpen">
            <div>{{ items.name }}</div>
            <nuxt-icon :name="isOpen ? 'caretUp' : 'caretDown'" />
        </div>
        <div
            v-for="(child, key) in items.children"
            :key="key"
            :class="isOpen ? 'base-dropdown__open' : 'base-dropdown__close'"
        >
            <div v-if="isOpen" class="base-dropdown__item">
                <nuxt-link class="base-dropdown__link" :to="`/product/${child.id}`">{{ child.name }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface BaseDropdownProps {
    items: any;
}

defineProps<BaseDropdownProps>();
const isOpen = ref(true);
</script>

<style lang="scss" scoped>
.base-dropdown {
    margin: 0.5rem 0;
    border: none;
    &__title {
        display: flex;
        gap: 0.2rem;
        font-size: 16px;
    }
    &__item {
        padding: 0.5rem 1rem;
        font-size: 14px;
    }
    &__link {
        color: #999;
        text-decoration: none;
        &:hover {
            color: #333;
        }
    }
    &__open {
        opacity: 1;
        transition: all 0.15s ease-out;
        max-height: 300px;
    }
    &__close {
        opacity: 0;
        transition: all 0.15s ease-out;
        height: 0px;
    }
}
</style>
