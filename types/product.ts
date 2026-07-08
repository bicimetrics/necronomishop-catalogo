export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image: string;
  badge: string | null;
  stock: number;
  price: number;
  category_id: number;
  created_at: string;
}