import { z } from "zod";

export const SignupInputSchema = z.object({
  body: z.object({
    username: z
      .string()
      .min(4, { message: "Username must be at least 3 characters" })
      .max(20),
    email: z.string().email({ message: "Invalid email address format" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});
