<script setup lang="ts">
const { value } = defineProps<{ value: string }>();
const model = defineModel();
</script>

<template>
  <label class="radio-button">
    <input type="radio" v-model="model" :value="value" />
    <div class="radio-button__text">
      <slot />
    </div>
  </label>
</template>

<style lang="scss" scoped>
.radio-button {
  cursor: pointer;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: -999;
    &:checked + .radio-button__text::after {
      display: block;
    }
  }
  &__text {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid var(--color-gray);
      position: absolute;
      top: 50%;
      left: 0px;
      transform: translateY(-50%);
      background: var(--color-white);
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 3px;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--color-black);
      display: none;
    }
  }
}
</style>
