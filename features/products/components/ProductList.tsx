import ProductRow from "./ProductRow";
import ProductRepository from "@/repositories/ProductRepository";

export default async function ProductList() {

    const products = await ProductRepository.getAll();

    return (

        <div className="space-y-5">

            {products.map(product => (

                <ProductRow

                    key={product.id}

                    product={product}

                />

            ))}

        </div>

    );

}