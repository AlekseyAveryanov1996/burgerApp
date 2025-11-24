import type { modalType } from "~/interfaces/UI/Modal-overlay";

export const useModal = () => {
  const isOpen = useState<boolean>("modal-is-open", () => false);
  const type = useState<modalType>("modal-type", () => null);
  const props = useState<object>("modal-props", () => ({}));

  function open(modalType: modalType, modalProps: object = {}) {
    type.value = modalType;
    props.value = modalProps;
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
    type.value = null;
    props.value = {};
  }

  return {
    isOpen,
    type,
    props,
    open,
    close,
  };
};
