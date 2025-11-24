<script lang="ts" setup></script>

<template>
  <div class="wrapper-container">
    <LayoutHeader />

    <main class="main-content">
      <div class="container main-content__container">
        <Basket />
        <slot />
      </div>
    </main>
    <footer class="footer">footer</footer>

    <UiModalOverlay />
  </div>
</template>

<style scoped lang="scss">
.main-content {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    @include min("tablet") {
      display: grid;
      grid-template-columns: minmax(0px, 300px) minmax(0px, 1fr);
      column-gap: 30px;
    }
  }
}
</style>
