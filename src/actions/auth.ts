"use server";
import { LoginScema, registerSechma } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginScema>) => {
  const validatedFields = LoginScema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Uh oh! Something went wrong." };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
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
      email,
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
