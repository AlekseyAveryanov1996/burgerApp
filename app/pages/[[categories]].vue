<script setup lang="ts">
import type { Product } from "~/interfaces/Product";

const categoryStore = useCategory();

// Загружаем категорию на основе URL
await categoryStore.loadCategoryFromUrl();

// Подгружаем список товаров из категории
const { data: productsLists } = await useFetch<Product[]>(
  `${apiConfig.baseURL}${apiConfig.endPoints.products}?catergiresID=${categoryStore.idCategory.value}`
);

const isEmptyList = computed(() => {
  if (productsLists.value) {
    return productsLists.value.length;
  }
});

const modalStore = useModal();
</script>

<template>
  <div class="gategory">
    <h1 class="gategory__title">
      {{ categoryStore.titleCategory }}
    </h1>
    <div v-if="!isEmptyList" class="gategory__error h2">
      Данный товар временно отсутствует!
    </div>
    <div v-else class="gategory__lists gategory-lists">
      <ProductsItem
        v-for="product in productsLists"
        :key="product.id"
        :name="product.name"
        :size="Number(product.size)"
        :price="Number(product.price)"
        :img-src="product.imgSrc"
        @open-popup="modalStore.modalOpen"
      />
    </div>

    <UiModalOverlay
      :is-open="modalStore.isModalOpen.value"
      @close="modalStore.modalClose"
      ><UiButton :style="'orange'">Попап</UiButton></UiModalOverlay
    >
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
