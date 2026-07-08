import ProductRepository from "@/src/repositories/ProductRepository";

export default class ProductService {

  static async getProducts() {

    return await ProductRepository.getAll();

  }

}