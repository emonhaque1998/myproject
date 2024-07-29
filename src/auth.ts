import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  secret: "ZYXlT5hBj/Dk3kpqRTE5dL7KtRXq3beAEQ3OjYCl0MU=",
  ...authConfig,
});
