<template>
  <div class="home-wrapper">
    <Filters />
    <Products :items="products" />
  </div>
</template>

<script setup lang="ts">
const page = ref(1);
const { data: products } = await useAsyncData(
  "post",
  () =>
    $fetch("https://interview-api.azkiloan.com/api/v1/products", {
      method: "POST",
      params: {
        size: 10,
        page: page.value,
      },
    }),
  {
    watch: [page],
  }
);
</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  gap: 1rem;
}
</style>
