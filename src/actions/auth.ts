"use server";
import { LoginScema, registerSechma } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const login = async (values: z.infer<typeof LoginScema>) => {
  const validatedFields = LoginScema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Uh oh! Something went wrong." };
  }

  return { success: "Email Send!" };
};

export const register = async (values: z.infer<typeof registerSechma>) => {
  const validatedFields = registerSechma.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Uh oh! Something went wrong." };
  }

  const { firstName, lastName, email, password, confromPassword } =
    validatedFields.data;

  const hashedPasswod = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPasswod,
    },
  });

  return { success: "User Created!" };
};
