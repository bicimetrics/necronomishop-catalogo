import ProductRepository from "@/repositories/ProductRepository";

export interface CatalogFilters {
  search?: string;
  categoryId?: number;
}

export default class ProductService {

  static async getProducts(
    filters?: CatalogFilters
  ) {

    return await ProductRepository.getAll(
      filters
    );

  }

}