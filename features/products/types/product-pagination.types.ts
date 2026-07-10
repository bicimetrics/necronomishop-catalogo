import { Product } from "./product.types";

export interface ProductPagination {

  data: Product[];

  total: number;

  page: number;

  perPage: number;

  totalPages: number;

}