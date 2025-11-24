<script setup lang="ts">
const modal = useModal();

const componentsMap = {
  product: defineAsyncComponent(
    () => import("@/components/modals/ProductModal.vue")
  ),
  order: defineAsyncComponent(
    () => import("@/components/modals/OrderModal.vue")
  ),
};

const currentComponent = computed(() => {
  return modal.type.value ? componentsMap[modal.type.value] : null;
});
</script>

<template>
  <div
    v-if="modal.isOpen.value"
    class="modal-overlay"
    @click.self="modal.close"
  >
    <div class="modal-content">
      <div class="modal-content__close" @click="modal.close">
        <IconsClose />
      </div>
      <component
        v-if="currentComponent"
        :is="currentComponent"
        v-bind="modal.props.value"
      />
    </div>
  </div>
</template>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 100%;
  height: 100%;
  background: var(--color-white);
  overflow-y: auto;
  position: relative;
  @include min("mobile") {
    max-width: 524px;
    border-radius: 24px;
    overflow-y: hidden;
    height: auto;
  }
  @include min("tablet") {
    max-width: 684px;
  }
  &__close {
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    @include min("mobile") {
      top: 16px;
      right: 16px;
    }
  }
}
</style>
