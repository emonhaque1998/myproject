import * as z from "zod";

export const LoginScema = z.object({
  email: z.string().email({
    message: "Required email address",
  }),
  password: z.string().min(1, {
    message: "Required password",
  }),
});

export const registerSechma = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  confromPassword: z.string(),
});
