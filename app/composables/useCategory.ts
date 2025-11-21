export const useCategory = () => {
  const route = useRoute();

  const idCategory = useState<number>("idCategory", () => 1);
  const titleCategory = useState<string>("titleCategory", () => "Бургеры");

  // Функция для загрузки категории по URL
  const loadCategoryFromUrl = async () => {
    const categoryUrl = route.params.categories as string;

    if (categoryUrl) {
      // Загружаем данные категории из API
      const { data: categories } = await useFetch(
        `http://localhost:3001/categories?nameCategoryUrl=${categoryUrl}`
      );

      if (categories.value && categories.value.length > 0) {
        const category = categories.value[0];
        idCategory.value = parseInt(category.id);
        titleCategory.value = category.nameCategory;
      }
    }
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
