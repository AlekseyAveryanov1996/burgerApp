<script setup lang="ts">
import type { ModalOverlay } from "~/interfaces/UI/Modal-overlay";

const { isOpen } = defineProps<ModalOverlay>();

const emit = defineEmits<{
  close: [];
}>();

function closeModal() {
  emit("close");
}
</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-content__close" @click.stop="closeModal">
        <IconsClose />
      </div>
      <slot />
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
  @include min("mobile") {
    max-width: 524px;
  }
  @include min("tablet") {
    max-width: 684px;
  }
}
</style>
