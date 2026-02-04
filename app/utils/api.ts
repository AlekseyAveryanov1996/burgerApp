import type { FetchOptions } from "ofetch";

type ApiQueryValue = string | number | boolean | null | undefined;

type ApiFetchOptions = FetchOptions & {
  query?: Record<string, ApiQueryValue>;
};

export const apiPaths = {
  categories: "/categories",
  categoriesItems: "/categoriesItems",
  basket: "/basket",
  orders: "/orders",
};

const buildApiUrl = (
  path: string,
  query: Record<string, ApiQueryValue>,
  baseUrl: string
) => {
  const url = new URL(path, baseUrl);

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
};

export const useApiUrl = (
  path: string,
  query: Record<string, ApiQueryValue> = {},
  baseUrl?: string
) => {
  const config = useRuntimeConfig();
  const resolvedBase = baseUrl ?? config.public.apiBase;
  return buildApiUrl(path, query, resolvedBase);
};

export const useApiFetch = async <T>(
  path: string,
  options: ApiFetchOptions = {}
) => {
  const config = useRuntimeConfig();
  const { query = {}, ...fetchOptions } = options;
  const primaryUrl = buildApiUrl(path, query, config.public.apiBase);
  const fallbackUrl = buildApiUrl(
    path,
    query,
    config.public.apiFallbackBase
  );

  try {
    return await $fetch<T>(primaryUrl, fetchOptions);
  } catch (error) {
    return await $fetch<T>(fallbackUrl, fetchOptions);
  }
};
