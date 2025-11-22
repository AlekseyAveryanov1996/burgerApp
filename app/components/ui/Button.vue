<script setup lang="ts">
import type { Button } from "~/interfaces/UI/Button";

const { style, fullwidth } = defineProps<Button>();
</script>

<template>
  <button
    class="btn"
    :class="`btn --${style}`"
    :style="fullwidth ? 'max-width: 100%' : ''"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 9px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  max-width: fit-content;
  &.--gray {
    background: var(--color-gray);
    color: var(--color-black);
  }
  &.--yellow {
    background: var(--color-accent);
    color: var(--color-white);
  }
  &.--orange {
    background: var(--color-orange);
    color: var(--color-white);
  }
  &.--disalbed {
    background: var(--color-gray);
    color: var(--color-disabled);
    pointer-events: none;
  }
}
</style>
