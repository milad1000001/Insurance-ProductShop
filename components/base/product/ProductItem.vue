<template>
  <div class="product-item">
    <figure class="product-item__image">
      <img :src="details.imageUrl" alt="Trulli" height="150" />
    </figure>
    <strong class="product-item__description english-text">{{ details.name }}</strong>
    <small>شروع قیمت از</small>
    <div>{{ `${details.minPrice} تومان` }}</div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  details: any;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.product-item {
  display: flex;
  flex-direction: column;
  &__description {
    width: 200px;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
