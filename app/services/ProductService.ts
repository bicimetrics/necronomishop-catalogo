import ProductRepository from "@/repositories/ProductRepository";

export default class ProductService {

  static async getProducts() {

    return await ProductRepository.getAll();

  }

}