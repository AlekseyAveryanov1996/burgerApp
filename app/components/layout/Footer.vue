<script setup lang="ts">
const dateNowYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__logo">
        <img src="/images/logo-footer.svg" alt="LogoFooter" />
      </div>
      <div class="footer__info">
        <div class="footer__info-item">
          <div class="footer__info-item-title">Номер для заказа</div>
          <div class="footer__info-item-content">
            <IconsPhone />
            <a href="tel:+7(930)833-38-11">+7(930)833-38-11</a>
          </div>
        </div>
        <div class="footer__info-item">
          <div class="footer__info-item-title">Мы в соцсетях</div>
          <div class="footer__info-item-content">
            <a href="#" target="_blank">
              <IconsVk />
            </a>
            <a href="#" target="_blank">
              <IconsTg />
            </a>
          </div>
        </div>
      </div>
      <div class="footer__description">
        <span>© YouMeal, {{ dateNowYear }}</span>
        <span>Design: Anastasia Ilina</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--color-white);
  padding: 26px 0;
  @include min("tablet") {
    padding: 52px 0;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include min("tablet") {
      display: grid;
      grid-template-columns: 304px minmax(0px, 1fr);
      column-gap: 242px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include min("tablet") {
      gap: 50px;
      flex-direction: row;
      margin-left: auto;
    }
    &-item {
      display: flex;
      flex-direction: column;
      gap: 12px;
      @include min("tablet") {
        gap: 24px;
      }
      &-title {
        font-weight: 500;
        font-size: 20px;
        @include min("tablet") {
          font-size: 24px;
        }
      }
      &-content {
        display: flex;
        align-items: center;
        gap: 16px;
        svg {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
  &__description {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
