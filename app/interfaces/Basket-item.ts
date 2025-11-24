import type { Product } from "./Product";

export interface BasketItem
  extends Omit<
    Product,
    "catergiresID" | "description" | "structure" | "calories"
  > {
  quantity: number;
}
