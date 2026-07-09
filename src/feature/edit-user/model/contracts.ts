import { z } from "zod";

export const editedUserSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters"),
  email: z.email("Enter a valid Email"),
  phone: z.string().min(8, "Password must be at least 8 characters"),
});

export type EditedUser = z.infer<typeof editedUserSchema>;
