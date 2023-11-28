<template>
    <div class="home-wrapper">
        <FFilterUnit class="home-wrapper__filters" />
        <PProductList class="home-wrapper__products" />
    </div>
</template>

<style lang="scss" scoped>
.home-wrapper {
    display: flex;
    justify-content: center;
    gap: 1rem;
    &__filters {
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }
    &__products {
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }
}
</style>
