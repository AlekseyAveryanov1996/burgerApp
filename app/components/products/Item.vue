<script setup lang="ts">
import type { Product } from "~/interfaces/Product";

const { imgSrc, name, size, price } =
  defineProps<Omit<Product, "id" | "catergiresID">>();

const emit = defineEmits<{
  openPopup: [];
}>();

function clickBtn() {
  emit("openPopup");
}
</script>

<template>
  <div class="product-item">
    <div class="product-item__img">
      <img :src="imgSrc ? imgSrc : 'local'" :alt="name" />
    </div>
    <div class="product-item__price">{{ price }}₽</div>
    <div class="product-item__name">
      {{ name }}
    </div>
    <div class="product-item__size">{{ size }}г</div>
    <div class="product-item__button">
      <UiButton :style="'gray'" :fullwidth="true" @click="clickBtn"
        >Добавить</UiButton
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-item {
  padding: 4px;
  background: var(--color-white);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @include min("tablet") {
    padding: 12px;
  }
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 10px;
    @include min("tablet") {
      margin-bottom: 16px;
    }
    img {
      width: 100%;
    }
  }
  &__price {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 4px;
    @include min("tablet") {
      font-size: 24px;
      margin-bottom: 8px;
    }
  }
  &__name {
    margin-bottom: 16px;
    @include min("tablet") {
      margin-bottom: 30px;
    }
  }
  &__size {
    margin-top: auto;
    color: var(--color-gray2);
    margin-bottom: 8px;
  }
}
</style>
