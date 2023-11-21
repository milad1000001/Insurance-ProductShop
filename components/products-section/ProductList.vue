<template>
  <div class="product-list">
    <ProductItem class="product-list__item" v-for="(item, index) in items.data" :key="index" :details="item" />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  items: any;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  gap: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  &__item {
    border: 1px solid #11111122;
    border-radius: 0.5rem;
    gap: 1rem;
    height: 350px;
    padding: 1rem;
    box-sizing: border-box;
  }
}

// @media (min-width: 900px) {
//   .product-list {
//     &__item {
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }
// }

// @media (max-width: 768px) {
//   .product-list {
//     &__item {
//       width: calc(50% - 20px);
//     }
//   }
// }

// @media (max-width: 576px) {
//   .product-list {
//     &__item {
//       width: 100%;
//     }
//   }
// }
</style>
