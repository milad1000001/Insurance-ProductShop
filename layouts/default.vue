<template>
    <div class="home-container">
        <FFilterUnit class="home-container__filters bordered" />
        <div class="home-container__product-page bordered">
            <slot />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.home-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto;
    max-width: 1200px;
    height: 90vh;
    direction: rtl;
    &__product-page {
        width: 100%;
        overflow-y: hidden;
    }
    &__filters {
        overflow-y: scroll;
    }
}
</style>
