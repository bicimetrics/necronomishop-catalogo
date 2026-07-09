import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3),

  slug: z.string().min(3),

  description: z.string(),

  price: z.coerce.number().positive(),

  stock: z.coerce.number().min(0),

  badge: z.string(),

  image: z.string(),

  category_id: z.coerce.number(),
});

export type ProductFormData =
  z.infer<typeof productSchema>;