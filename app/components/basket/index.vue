<script setup lang="ts">
const isOpen = ref<boolean>(false);

function toggleOpen() {
  isOpen.value = !isOpen.value;
}

const basketStore = useBasket();
</script>

<template>
  <div class="basket" :class="isOpen ? '--open' : ''">
    <div class="basket__header" @click="toggleOpen">
      <div class="basket__title">Корзина</div>
      <div class="basket__count">{{ basketStore.countInBasket }}</div>
    </div>

    <div class="basket__main">
      <div v-if="!basketStore.countInBasket.value" class="basket__label">
        Тут пока пусто :(
      </div>
      <div v-else class="basket__info">
        <div class="basket__lists">
          <BasketItem
            v-for="item in basketStore.basketItems.value"
            :key="item.id"
            :id="item.id"
            :img-src="item.imgSrc"
            :name="item.name"
            :price="Number(item.price)"
            :size="Number(item.size)"
            :quantity="Number(item.quantity)"
            @delete-product="() => basketStore.deleteProduct(item.id)"
          />
        </div>
        <div class="basket__bottom">
          <div class="basket__all-price">
            <div class="basket__all-price-title">Итого</div>
            <div class="basket__all-price-count">
              {{ basketStore.countAllPrice }}₽
            </div>
          </div>

          <div class="basket__order">
            <UiButton :style="'orange'" :fullwidth="true"
              >Оформить заказ</UiButton
            >
          </div>
          <div class="basket__order-description">
            <img src="/images/delivery.jpg" alt="IconDelivery" />
            Бесплатная доставка
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.basket {
  padding: 16px 10px;
  border-radius: 12px;
  background: var(--color-white);
  height: fit-content;
  @include min("mobile") {
    max-width: 360px;
  }
  @include min("tablet") {
    padding: 24px 16px;
    max-width: 100%;
  }
  &.--open {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
    @include min("tablet") {
      box-shadow: none;
    }
    .basket__main {
      display: block;
    }
    .basket__header {
      padding-bottom: 8px;
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    @include min("tablet") {
      padding-bottom: 8px;
    }
  }
  &__title {
    font-size: 16px;
    font-weight: 600;
    @include min("tablet") {
      font-size: 24px;
    }
  }
  &__count {
    padding: 1px 13px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-gray);
    font-size: 10px;
    flex-shrink: 0;
    @include min("tablet") {
      font-size: 12px;
      padding: 2px 16px;
    }
  }
  &__main {
    display: none;
    padding-top: 11px;
    border-top: 1px solid var(--color-gray);
    @include min("tablet") {
      display: block;
      padding-top: 16px;
    }
  }
  &__label {
    font-weight: 600;
    color: var(--color-orange);
  }
  &__lists {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__bottom {
    margin-top: 16px;
  }
  &__all-price {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
    font-size: 16px;
  }
  &__order {
    margin-top: 16px;
    @include min("tablet") {
      margin-top: 24px;
    }
    &-description {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
      img {
        display: flex;
        flex-shrink: 0;
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
