import { z } from "zod";

export const NewSchema = z.object({ search: z.string() });

export type NewType = z.infer<typeof NewSchema>;
