import ProductRepository from "@/repositories/ProductRepository";

export interface CatalogFilters {
  search?: string;
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