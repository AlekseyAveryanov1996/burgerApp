type ApiQueryValue = string | number | boolean | null | undefined;

export const apiPaths = {
  categories: "/categories",
  categoriesItems: "/categoriesItems",
  basket: "/basket",
  orders: "/orders",
};

export const useApiUrl = (
  path: string,
  query: Record<string, ApiQueryValue> = {}
) => {
  const config = useRuntimeConfig();
  const url = new URL(path, config.public.apiBase);

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
};
