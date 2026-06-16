import { z } from "zod";

const signupSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters"),
  email: z.email("Enter a valid Email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
});

// export const schema = signupSchema.refine(
//   (data) => data.password === data.confirmPassword,
//   {
//     message: "Password don't match",
//     path: ["confirmPassword"],
//     when(payload) {
//       console.log(payload);

//       return signupSchema
//         .pick({ password: true, confirmPassword: true })
//         .safeParse(payload.value).success;
//     },
//   },
// );

export type Signup = z.infer<typeof schema>;
