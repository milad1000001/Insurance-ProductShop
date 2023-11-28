<template>
    <div class="filter-wrapper">
        <FCategoryList />
        <hr class="line" />
        <FMerchantList />
    </div>
</template>

<style lang="scss" scoped>
.filter-wrapper {
    display: flex;
    flex: 1 0 240px;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
}
</style>
