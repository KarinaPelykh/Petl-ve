import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(3, "Username must be at least 3 characters"),
    email: z.email("Enter a valid Email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

export type Signup = z.infer<typeof signupSchema>;
