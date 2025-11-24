export interface Product {
  id: number | string;
  catergiresID: number;
  imgSrc: string;
  name: string;
  price: number;
  size: number;
  description: string;
  structure: string;
  calories: number;
}

export interface ProductModalsProps
  extends Omit<Product, "id" | "catergiresID"> {}
