export interface Product {
  id?: number;

  name: string;

  slug: string;

  description: string;

  price: number;

  stock: number;

  badge?: string;

  image: string;

  category_id: number;

  created_at?: string;

  categories?: {
    name: string;
  };
}

export interface Category {
  id: number;
  name: string;
}