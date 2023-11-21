<template>
  <div class="product">
    <figure class="product__image">
      <img :src="details.imageUrl" alt="Trulli" height="150" />
    </figure>
    <h1 class="product__description">{{ details.name }}</h1>
    <small>شروع قیمت از</small>
    <span>{{ details.minPrice }}</span>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  details: any;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.product {
  display: flex;
  flex-direction: column;
  border: 1px solid #11111122;
  gap: 1rem;
  border-radius: 0.5rem;
  height: 350px;
  padding: 1rem;
  box-sizing: border-box;
  &__description {
    width: 250px;
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
