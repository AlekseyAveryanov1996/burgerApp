<template>
  <header class="header">
    <div class="container header__container">
      <NuxtLink to="/" class="header__logo">
        <img src="/images/logo.svg" alt="Logo" />
      </NuxtLink>

      <div class="header__title-wrapper">
        <div class="header__burger">
          <img src="/images/pic.png" alt="BurgerImg" />
        </div>
        <div class="header__text">
          <div class="header__title">
            Только самые <br />
            <span>сочные бургеры!</span>
          </div>
          <div class="header__sub-title">Бесплатная доставка от 599₽</div>
        </div>
      </div>
    </div>
  </header>

  <NavTopMenu />
</template>

<style scoped lang="scss">
.header {
  padding: 20px 0 30px 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  @include min("mobile") {
    padding: 24px 0 44px 0;
  }
  @include min("tablet") {
    padding: 24px 0 63px 0;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    width: 1024px;
    height: 1024px;
    background: var(--color-accent);
    border-radius: 50%;
    z-index: -1;
    @include min("mobile") {
      width: 2540px;
      height: 2540px;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  &__logo {
    width: 100%;
    max-width: 153px;
  }
  &__title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 19px;
    align-items: center;
    @include min("mobile") {
      flex-direction: row;
      align-items: flex-start;
      gap: 10px;
    }
    @include min("tablet") {
      gap: 1px;
    }
    @include min("tabletLarge") {
      gap: 20px;
    }
  }
  &__burger {
    order: 1;
    max-width: 227px;
    flex-shrink: 0;
    display: flex;
    @include min("mobile") {
      order: -1;
    }
    @include min("tablet") {
      max-width: 326px;
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @include min("mobile") {
      gap: 26px;
      margin-top: 27px;
    }
    @include min("tablet") {
      gap: 52px;
      margin-top: 46px;
    }
  }
  &__title {
    font-weight: 800;
    font-size: 30px;
    line-height: 120%;
    color: var(--color-white);
    text-align: center;
    @include min("mobile") {
      font-size: 36px;
      text-align: left;
    }
    @include min("tablet") {
      font-size: 50px;
    }
    span {
      color: #ff5c00;
    }
  }
  &__sub-title {
    text-align: center;
    color: var(--color-white);
    @include min("mobile") {
      text-align: left;
    }
  }
}
</style>
