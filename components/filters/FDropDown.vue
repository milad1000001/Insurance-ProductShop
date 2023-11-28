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
            <div v-if="isOpen" class="base-dropdown__item" @click="sendProductId(child.id)">
                {{ child.name }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();

interface BaseDropdownProps {
    items: any;
}

const sendProductId = (id: number) => {
    router.push({ path: `/${id}` });
};

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
        padding: 0.2rem 1rem;
        padding: 0.5rem 1rem;
        color: #888888;
        font-size: 14px;
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
