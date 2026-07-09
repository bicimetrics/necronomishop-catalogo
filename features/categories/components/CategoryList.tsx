import { getCategories } from "../repositories/category.repository";
import CategoryRow from "./CategoryRow";

export default async function CategoryList() {

  const categories =
    await getCategories();

  return (
    <>
      {categories.map((category) => (
        <CategoryRow
          key={category.id}
          category={category}
        />
      ))}
    </>
  );
}