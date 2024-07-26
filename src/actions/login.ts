"use server";
import { LoginScema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginScema>) => {
  const validatedFields = LoginScema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Uh oh! Something went wrong." };
  }

  return { success: "Email Send!" };
};
