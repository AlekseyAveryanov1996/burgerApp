export const useModal = () => {
  const isModalOpen = useState<boolean>("isModalOpen", () => true);

  function modalOpen() {
    isModalOpen.value = true;
  }

  function modalClose() {
    isModalOpen.value = false;
  }

  return {
    isModalOpen,
    modalOpen,
    modalClose,
  };
};
