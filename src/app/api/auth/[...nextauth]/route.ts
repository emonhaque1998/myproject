import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {});
}
