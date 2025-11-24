import type { BasketItem } from "~/interfaces/Basket-item";

export const useBasket = () => {
  const { data: basketItems, refresh } = useFetch<BasketItem[]>(
    `${apiConfig.baseURL}${apiConfig.endPoints.basket}`
  );

  const countInBasket = computed(() => {
    return basketItems.value?.reduce((total, elem) => total + elem.quantity, 0);
  });

  const countAllPrice = computed(() => {
    return basketItems.value?.reduce(
      (total, elem) => total + elem.price * elem.quantity,
      0
    );
  });

  async function addBasket(productData: BasketItem) {
    try {
      await $fetch(`${apiConfig.baseURL}${apiConfig.endPoints.basket}`, {
        method: "POST",
        body: {
          productID: productData.id,
          name: productData.name,
          price: productData.price,
          size: productData.size,
          quantity: productData.quantity || 1,
          imgSrc: productData.imgSrc,
        },
      });

      await refresh(); // обновляем данные после добавления
    } catch (error) {
      console.log(error, "Ошибка добавления в корзину");
    }
  }

  async function deleteProduct(idProduct: string | number) {
    try {
      await $fetch(
        `${apiConfig.baseURL}${apiConfig.endPoints.basket}/${idProduct}`,
        {
          method: "DELETE",
        }
      );
      await refresh();
      console.log("Товар удален из корзины");
    } catch (error) {
      console.log(error, "Ошибка удаления товара из корзины");
    }
  }

  return {
    countInBasket,
    basketItems,
    countAllPrice,
    refresh,
    addBasket,
    deleteProduct,
  };
};
