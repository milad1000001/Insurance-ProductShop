<template>
    <input v-model="model" class="base-input" type="text" :placeholder="placeholder" />
</template>

<script setup lang="ts">
interface BaseInputProps {
    modelValue: any;
    placeholder: string;
}

const props = defineProps<BaseInputProps>();
const emit = defineEmits<{
    (e: 'update:modelValue', model: number): void;
}>();

const model = ref(props.modelValue);

watchEffect(() => {
    model.value = props.modelValue;
});

watchEffect(() => {
    emit('update:modelValue', model.value);
});
</script>

<style lang="scss" scoped>
.base-input {
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 0.5rem;
    background-color: #efefef;
    padding: 0.8rem 1rem;
    width: 100%;
    font-family: 'alibaba';
    &:focus {
        outline: none;
        border: 2px solid #888;
    }
}
</style>
