<script setup lang="ts">
import type { Product, ProductModalsProps } from "~/interfaces/Product";

const { imgSrc, name, price, size, description, structure, calories } =
  defineProps<ProductModalsProps>();
</script>

<template>
  <div class="product-modal">
    <div class="product-modal__title h1">{{ name }}</div>
    <div class="product-modal__main">
      <div class="product-modal__img">
        <img :src="imgSrc" :alt="name" />
      </div>
      <div class="product-modal__content">
        <div class="product-modal__description">{{ description }}</div>
        <div class="product-modal__structure">
          <div class="product-modal__structure-title">Состав:</div>
          <div class="product-modal__structure-content">{{ structure }}</div>
        </div>
        <div class="product-modal__size">{{ size }}г. ккал {{ calories }}</div>
      </div>
    </div>
    <div class="product-modal__bottom">
      <div class="product-modal__buttons">
        <UiButton :style="'orange'" :fullwidth="true">Добавить</UiButton>
        <UiCounter :max="10" />
      </div>
      <div class="product-modal__price">{{ price }}₽</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-modal {
  padding: 32px 10px;
  @include min("mobile") {
    padding: 16px;
  }
  @include min("tablet") {
    padding: 24px;
  }
  &__title {
    margin-bottom: 12px;
    @include min("mobile") {
      margin-bottom: 16px;
    }
    @include min("tablet") {
      margin-bottom: 24px;
    }
  }
  &__main {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @include min("mobile") {
      flex-direction: row;
      gap: 8px;
    }
    @include min("tablet") {
      gap: 16px;
    }
  }
  &__img {
    display: block;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 16px;
    @include min("mobile") {
      max-width: 226px;
    }
    @include min("tablet") {
      max-width: 275px;
    }
    img {
      width: 100%;
    }
  }
  &__structure {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 10px;
    font-size: 12px;
    &-title {
      font-weight: 700;
    }
  }
  &__size {
    margin-top: 4px;
    font-size: 12px;
    color: var(--color-gray2);
  }
  &__bottom {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    @include min("mobile") {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__buttons {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    @include min("mobile") {
      display: grid;
      grid-template-columns: 218px auto;
      column-gap: 8px;
      max-width: fit-content;
    }
    @include min("tablet") {
      grid-template-columns: 276px auto;
      column-gap: 16px;
    }
  }
  &__price {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    @include min("tablet") {
      font-size: 24px;
    }
  }
}
</style>
