import type { CategoryMenu } from "~/interfaces/category-menu";

export const useCategory = () => {
  const route = useRoute();

  const idCategory = useState<number>("idCategory", () => 1);
  const titleCategory = useState<string>("titleCategory", () => "Бургеры");
  const isInitialize = useState<boolean>("initializeCategory", () => false);

  // Функция для загрузки категории по URL
  const loadCategoryFromUrl = async () => {
    if (isInitialize.value) {
      return;
    }

    const categoryUrl = route.params.categories as string;

    if (categoryUrl) {
      // Загружаем данные категории из API
      const { data: categories } = await useFetch<CategoryMenu[]>(
        `${apiConfig.baseURL}${apiConfig.endPoints.categories}?nameCategoryUrl=${categoryUrl}`
      );

      if (categories.value && categories.value.length > 0) {
        const category = categories.value[0];

        if (category) {
          idCategory.value = category.id;
          titleCategory.value = category.nameCategory;
        }
      }
    }

    isInitialize.value = true;
  };

  const setIdCategory = (id: number) => {
    idCategory.value = id;
  };

  const setTitleCategory = (title: string) => {
    titleCategory.value = title;
  };

  return {
    idCategory,
    titleCategory,
    setIdCategory,
    setTitleCategory,
    loadCategoryFromUrl,
  };
};
