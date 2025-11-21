<script setup lang="ts">
const categoryStore = useCategory();

// Загружаем категорию на основе URL
await categoryStore.loadCategoryFromUrl();

// Подгружаем список товаров из категории
const { data: categoryLists } = await useFetch<[]>(
  `http://localhost:3001/categoriesItems?catergiresID=${categoryStore.idCategory.value}`
);

const isEmptyList = computed(() => {
  if (categoryLists.value) {
    return categoryLists.value.length;
  }
});
</script>

<template>
  <div class="gategory">
    <h1 class="gategory__title">
      {{ categoryStore.titleCategory }}
    </h1>
    <div v-if="!isEmptyList" class="gategory__error h2">
      Данный товар временно отсутствует!
    </div>
    <div v-else class="gategory__lists gategory-lists">lists</div>
  </div>
</template>

<style scoped lang="scss">
.gategory {
  &__lists {
    margin-top: 16px;
    @include min("tablet") {
      margin-top: 24px;
    }
  }
  &__error {
    margin-top: 16px;
    color: var(--color-orange);
    @include min("tablet") {
      margin-top: 24px;
    }
  }
}

.gategory-lists {
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 1fr));
  gap: 10px;
  @include min("mobile") {
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 20px;
  }
  @include min("tablet") {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    gap: 30px;
  }
  @include min("tabletLarge") {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
}
</style>
