<script setup lang="ts">
const { srcImg, titleCategory } = defineProps<{
  srcImg?: string;
  titleCategory: string;
}>();
</script>

<template>
  <div class="menu-item">
    <div v-if="srcImg" class="menu-item__icon">
      <img :src="srcImg" :alt="titleCategory" />
    </div>
    <div class="menu-item__text">{{ titleCategory }}</div>
  </div>
</template>

<style scoped lang="scss">
.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 50px;
  background: var(--color-white);
  cursor: pointer;
  transition: background 0.5s linear;
  border: 1px solid transparent;
  transition: border var(--trans);
  &:hover {
    @include min("tabletLarge") {
      border: 1px solid var(--color-orange);
    }
  }
  &__icon {
    display: flex;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
  &__text {
    color: var(--color-black);
    font-weight: 400;
    font-size: 16px;
  }
}

.router-link-exact-active {
  .menu-item {
    background: var(--color-accent);
    transition: background 0.5s linear;
  }
}
</style>
