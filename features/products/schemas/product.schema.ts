import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Debe tener al menos 3 caracteres"),

  slug: z
    .string()
    .min(3, "Slug inválido"),

  description: z.string().optional(),

  price: z.coerce
    .number()
    .min(1, "Precio inválido"),

  stock: z.coerce
    .number()
    .min(0),

  badge: z.string().optional(),

  category_id: z.coerce.number(),
});

export type ProductFormData = z.infer<typeof productSchema>;