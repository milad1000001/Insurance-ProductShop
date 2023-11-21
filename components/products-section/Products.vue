<template>
  <div class="product-wrapper">
    <Product
      class="product-wrapper__item"
      v-for="(item, index) in items.data"
      :key="index"
      :details="item"
    />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  items: any;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 0.5rem;
  &__item {
    display: flex;
  }
}
</style>
