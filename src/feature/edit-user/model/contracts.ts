import { z } from "zod";

export const editedUserSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters").optional(),
  email: z.email("Enter a valid Email").optional(),
  phone: z
    .string()
    .regex(/^\+38\d{10}$/, "Введіть номер телефону у форматі +380XXXXXXXXX")

    .optional(),
  avatarUrl: z
    .url()
    .regex(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Введіть url фото у форматі png|jpg|jpeg|gif|bmp|webp",
    ),
});

export type EditedUser = z.infer<typeof editedUserSchema>;
