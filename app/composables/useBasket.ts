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
      const existingItem = basketItems.value?.find(
        (item) => item.id === productData.id
      );

      if (existingItem) {
        await $fetch(
          `${apiConfig.baseURL}${apiConfig.endPoints.basket}/${existingItem.id}`,
          {
            method: "PATCH",
            body: {
              quantity: existingItem.quantity + (productData.quantity || 1),
            },
          }
        );
      } else {
        await $fetch(`${apiConfig.baseURL}${apiConfig.endPoints.basket}`, {
          method: "POST",
          body: {
            id: productData.id,
            productID: productData.id,
            name: productData.name,
            price: productData.price,
            size: productData.size,
            quantity: productData.quantity || 1,
            imgSrc: productData.imgSrc,
          },
        });
      }
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

  async function updateQuantity(itemId: number | string, newQuantity: number) {
    try {
      await $fetch(
        `${apiConfig.baseURL}${apiConfig.endPoints.basket}/${itemId}`,
        {
          method: "PATCH",
          body: {
            quantity: newQuantity,
          },
        }
      );
      await refresh();
      console.log("Количество изменено");
    } catch (error) {
      console.log(error, "Ошибка обновления данных");
    }
  }

  return {
    countInBasket,
    basketItems,
    countAllPrice,
    refresh,
    addBasket,
    deleteProduct,
    updateQuantity,
  };
};
