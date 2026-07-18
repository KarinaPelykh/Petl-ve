import { z } from "zod";

export const petSchema = z
  .object({
    title: z.string(),
    name: z.string(),
    avatarUrl: z
      .url()
      .regex(
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
        "Введіть url фото у форматі png|jpg|jpeg|gif|bmp|webp",
      )
      .optional(),
    avatarFile: z
      .file()
      .min(1)
      .max(1024 * 1024)
      .mime("image/png")
      .optional(),
    species: z.string(),
    birthday: z.string(),
    // .regex(/^\d{4}-\d{2}-\d{2}$/, "Введіть дату у форматі 00.00.0000"),
    sex: z.string(),
  })
  .refine((data) => data.avatarFile || data.avatarUrl, {
    message: "Завантажте файл або вкажіть посилання",
    path: ["file"],
  });

export type PetData = z.infer<typeof petSchema>;
