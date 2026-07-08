import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "Ingrese un nombre."),

  slug: z.string().min(3),

  description: z.string().optional(),

  price: z.coerce.number().min(1),

  stock: z.coerce.number().min(0),

  category_id: z.coerce.number(),

  badge: z.string().optional(),

  status: z.enum(["published", "draft"]),

  whatsapp: z.string().min(8),
});

export type ProductFormData = z.infer<typeof productSchema>;