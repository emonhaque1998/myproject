import * as z from "zod";

export const LoginScema = z.object({
  email: z.string().email({
    message: "Required email address",
  }),
  password: z.string().min(1, {
    message: "Required password",
  }),
});
