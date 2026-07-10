import {
  getProductsPaginated,
} from "../repositories/product-list.repository";

import {
  ProductFilters,
} from "../types/product-filter.types";

import ProductRow from "./ProductRow";
import PaginationWrapper from "./PaginationWrapper";

interface Props {
  filters?: ProductFilters;
}

export default async function ProductList({
  filters,
}: Props) {

  const result =
  await getProductsPaginated(filters);

  return (
    <>
      {result.data.map((product) => (
        <ProductRow
          key={product.id}
          product={product}
        />
      ))}

      <tr>
        <td
          colSpan={6}
          className="border-t border-zinc-800 p-6"
        >
          <PaginationWrapper
            page={result.page}
            totalPages={result.totalPages}
          />
        </td>
      </tr>
    </>
  );

}