export interface ProductImage {
  id: number;

  product_id: number;

  image: string;

  sort_order: number;

  created_at: string;
}

export interface Product {
  id: number;

  name: string;

  slug: string;

  description: string | null;

  price: number;

  stock: number;

  badge: string | null;

  image: string;

  images?: ProductImage[];

  category_id: number;

  created_at: string;

  categories?: {
    name: string;
  };
}

export interface CreateProduct {
  name: string;

  slug: string;

  description: string;

  price: number;

  stock: number;

  badge: string | null;

  image: string;

  category_id: number;
}

export interface UpdateProduct {
  id: number;

  name: string;

  slug: string;

  description: string;

  price: number;

  stock: number;

  badge: string | null;

  image: string;

  category_id: number;
}

export interface Category {
  id: number;

  name: string;
}