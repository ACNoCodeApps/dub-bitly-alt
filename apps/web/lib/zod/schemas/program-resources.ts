import { z } from "zod";

export const programResourceFileSchema = z.object({
  name: z.string(),
  size: z.number(),
  url: z.string().url(),
});

export const programResourceColorSchema = z.object({
  name: z.string(),
  color: z.string(),
});

export const programResourcesSchema = z.object({
  logos: z.array(programResourceFileSchema),
  colors: z.array(programResourceColorSchema),
  files: z.array(programResourceFileSchema),
});
