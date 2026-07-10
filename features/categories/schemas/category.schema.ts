import { z } from "zod";

export type CategoryFormData = z.infer<typeof categorySchema>;

export const categorySchema = z.object({

  name: z.string().min(2),

  slug: z.string(),

  description: z.string().optional(),

});
