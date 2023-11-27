<template>
    <label class="base-checkbox">
        <input class="base-checkbox__icon" type="checkbox" :checked="modelValue" @change="handleChange" />
        <small>{{ label }}</small>
    </label>
</template>

<script setup lang="ts">
interface BaseCheckboxProps {
    modelValue: any;
    label: string;
}

const props = defineProps<BaseCheckboxProps>();
const model = ref(props.modelValue);
const emit = defineEmits<{
    (e: 'update:modelValue', model: number): void;
}>();

const handleChange = () => {
    emit('update:modelValue', model.value);
};
</script>
<style lang="scss" scoped>
.base-checkbox {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
    &__icon {
        outline: none;
        border-radius: 6px;
        width: 1.3rem;
        height: 1.3rem;
    }
}
input[type='checkbox'] {
    appearance: none;
    margin: 0;
    border: 1px solid #aaa;
    background-color: #fff;
}
</style>
