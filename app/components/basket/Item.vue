<script setup lang="ts">
import type { BasketItem } from "~/interfaces/Basket-item";

const { imgSrc, size, name, price, quantity, id } = defineProps<BasketItem>();

const emit = defineEmits<{
  "delete-product": [];
}>();

function deleteProduct() {
  emit("delete-product");
}

const storeBasket = useBasket();
</script>

<template>
  <div class="basket-item">
    <div class="basket-item__img">
      <img :src="imgSrc" :alt="imgSrc" />
    </div>
    <div class="basket-item__main">
      <div class="basket-item__title">{{ name }}</div>
      <div class="basket-item__size">{{ size }}г</div>
      <div class="basket-item__price">{{ price }}₽</div>
    </div>
    <div class="basket-item__count">
      <UiCounter
        :model-value="quantity"
        @change="(valueTest) => storeBasket.updateQuantity(id, valueTest)"
      />
    </div>
    <div class="basket-item__delete" @click="deleteProduct">
      <IconsClose />
    </div>
  </div>
</template>

<style scoped lang="scss">
.basket-item {
  padding-bottom: 13px;
  border-bottom: 1px solid var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__img {
    display: flex;
    max-width: 64px;
    border-radius: 8px;
    flex-shrink: 0;
    height: fit-content;
  }
  &__main {
    margin-left: 10px;
    margin-right: 10px;
  }
  &__title {
    font-size: 12px;
    line-height: 14px;
  }
  &__size {
    color: var(--color-gray2);
    font-size: 12px;
    margin-top: 1px;
  }
  &__price {
    font-size: 12px;
  }
  &__delete {
    margin-bottom: auto;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    cursor: pointer;
  }
  &__count {
    margin-left: auto;
  }
}
</style>
