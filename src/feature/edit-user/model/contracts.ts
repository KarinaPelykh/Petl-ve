import { z } from "zod";

export const editedUserSchema = z
  .object({
    name: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .optional(),
    email: z.email("Enter a valid Email").optional(),
    phone: z
      .string()
      .regex(/^\+38\d{10}$/, "Введіть номер телефону у форматі +380XXXXXXXXX")

      .optional(),
    avatarUrl: z.url("Невірне посилання").optional(),
    avatarFile: z
      .file()
      .min(1)
      .max(1024 * 1024)
      .mime("image/png")
      .optional(),
  })
  .refine((data) => data.avatarUrl || data.avatarFile, {
    message: "Завантажте файл або вкажіть посилання",
    path: ["file"],
  });

export type EditedUser = z.infer<typeof editedUserSchema>;
