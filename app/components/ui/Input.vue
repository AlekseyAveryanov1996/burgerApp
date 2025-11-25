<script setup lang='ts'>
  const model = defineModel();
  const {placeholder, type='text'} = defineProps<{placeholder?: string, type?: string,}>();
</script>

<template>
  <div class="input-block">
    <input :type="type" :placeholder='placeholder' v-model='model'></input>
  </div>
</template>

<style scoped lang='scss'>
.input-block {
  input {
    padding: 8.5px 12px;
    border-radius: 12px;
    border: 1px solid var(--color-gray);
    background: var(--color-white);
    font-size: 10px;
    line-height: 10px;
    color: var(--color-black);
    width: 100%;
    @include min('tablet') {
      padding: 12px;
      font-size: 12px;
    }
    &::placeholder {
      color: var(--color-gray2);
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
