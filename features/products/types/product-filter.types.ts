export type ProductStockFilter =
  | "available"
  | "low"
  | "empty";

export type ProductSort =
  | "newest"
  | "oldest"
  | "priceAsc"
  | "priceDesc"
  | "nameAsc"
  | "nameDesc";

export interface ProductFilters {

  search?: string;

  categoryId?: number;

  stock?: ProductStockFilter;

  sort?: ProductSort;

  page?: number;

  perPage?: number;

}