<script setup lang="ts">
import type { Counter } from "~/interfaces/UI/Counter";

const props = withDefaults(defineProps<Counter>(), {
  modelValue: 1,
  min: 1,
  max: 99,
  step: 1,
});

const emit = defineEmits<{
  "update:modelValue": [value: number];
  change: [value: number];
}>();

const count = ref(props.modelValue);

function increment() {
  if (count.value < props.max) {
    count.value += props.step;
    updateValue();
  }
}

function decrement() {
  if (count.value > props.min) {
    count.value -= props.step;
    updateValue();
  }
}

function updateValue() {
  emit("update:modelValue", count.value); // для V-model
  emit("change", count.value); // для обработки события
}

// Следим за изменением modelValue извне
watch(
  () => props.modelValue,
  (newValue) => {
    count.value = newValue;
  }
);
</script>

<template>
  <div class="counter">
    <div class="counter__btn" @click="decrement" :disabled="count <= props.min">
      -
    </div>
    <div class="counter__value">{{ count }}</div>
    <div class="counter__btn" @click="increment" :disabled="count >= props.max">
      +
    </div>
  </div>
</template>

<style lang="scss" scoped="scss">
.counter {
  padding: 6px 8px;
  border-radius: 8px;
  background: var(--color-gray);
  display: flex;
  align-items: center;
  gap: 20px;
  &__btn {
    cursor: pointer;
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__value {
    min-width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
