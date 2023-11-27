<template>
    <div class="dropdown">
        <strong @click="toggleDropdown">{{ headTitle }} {{ isOpen ? '⬇' : '⬆' }}</strong>
        <div v-if="isOpen" class="dropdown-content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
interface BaseDropdownProps {
    headTitle: string;
}

defineProps<BaseDropdownProps>();
const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.dropdown {
    border: none;
}

.dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
    padding: 12px;
    min-width: 160px;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
