import { z } from "zod";

export const ColorSchema = z.object({
  code: z.string(),
  collection: z.string(),
  name: z.string(),
  hex: z.string(),
  r: z.number(),
  g: z.number(),
  b: z.number(),
  c: z.number(),
  m: z.number(),
  y: z.number(),
  k: z.number(),
});

export const ColorResponseSchema = z.object({
  page: z.number(),
  limit: z.number(),
  count: z.number(),
  total: z.number(),
  totalPages: z.number(),
  hasNextPage: z.boolean(),
  hasPrevPage: z.boolean(),
  nextPage: z.number().nullable(),
  prevPage: z.number().nullable(),
  data: z.array(ColorSchema),
});

export type Color = z.infer<typeof ColorSchema>;
export type ColorResponse = z.infer<typeof ColorResponseSchema>;
