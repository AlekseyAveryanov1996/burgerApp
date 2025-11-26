<script setup lang="ts">
import type { CategoryMenu } from "~/interfaces/category-menu";

const swiperMenuWrapper = ref(null);
const swiper = useSwiper(swiperMenuWrapper);

useSwiper(swiperMenuWrapper, {
  breakpoints: {
    360: {
      spaceBetween: 8,
      slidesPerView: "auto",
    },
    765: {
      spaceBetween: 12,
      slidesPerView: "auto",
    },
    980: {
      spaceBetween: 24,
      slidesPerView: "auto",
    },
  },
});

// получаем данные с категориями
const { data: categoriesMenu } = await useFetch<CategoryMenu[]>(
  `https://my-burger-api-production.up.railway.app/categories`
);

const categoryStore = useCategory();
</script>

<template>
  <div class="top-menu">
    <div class="container top-menu__container">
      <ClientOnly>
        <swiper-container ref="swiperMenuWrapper" class="top-menu__slider">
          <swiper-slide
            class="swiper-slide"
            v-for="category in categoriesMenu"
            :key="category.id"
          >
            <NuxtLink
              :to="{
                name: 'categories',
                params: { categories: category.nameCategoryUrl },
              }"
              @click="
                () => {
                  categoryStore.setIdCategory(category.id); // прокидываем параметр id
                  categoryStore.setTitleCategory(category.nameCategory); // прокидываем параметр id
                }
              "
            >
              <NavMenuItem
                :src-img="category.iconCategory"
                :title-category="category.nameCategory"
              />
            </NuxtLink>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-menu {
  padding: 30px 0;
  overflow: hidden;
  @include min("mobile") {
    padding: 30px 0 36px 0;
  }
  @include min("tablet") {
    padding: 40px 0 50px 0;
  }
}
.swiper-slide {
  width: auto !important;
}
</style>
