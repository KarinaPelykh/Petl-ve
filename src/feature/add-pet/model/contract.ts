import { z } from "zod";

export const petSchema = z
  .object({
    title: z.string(),
    name: z.string(),
    avatarUrl: z
      .url()
      // .regex(
      //   /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      //   "Введіть url фото у форматі png|jpg|jpeg|gif|bmp|webp",
      // )
      .optional(),
    avatarFile: z
      .file()
      .min(1)
      .max(1024 * 1024)
      .mime("image/png")
      .optional(),
    species: z.string(),
    birthday: z.string(),
    sex: z.string(),
  })
  .refine((data) => data.avatarFile || data.avatarUrl, {
    message: "Завантажте файл або вкажіть посилання",
    path: ["file"],
  });

export type PetData = z.infer<typeof petSchema>;
