import { Product } from "../types/product.types";
import { uploadProductImage } from "./image.service";
import { createProduct } from "../actions/createProduct";

export async function saveProduct(
  data: Product,
  image?: File | null
) {
  console.log("SERVICE 1");

  let imagePath = "";

  if (image) {
    console.log("SERVICE 2");

    imagePath = await uploadProductImage(image);

    console.log("SERVICE 3", imagePath);
  }

  console.log("SERVICE 4");

  await createProduct({
    ...data,
    image: imagePath,
  });

  console.log("SERVICE 5");
}