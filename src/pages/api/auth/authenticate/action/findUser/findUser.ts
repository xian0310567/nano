import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto-js";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, password } = req.body;

  if (!userId || !password) return "not found params [userId or password]";

  console.log({
    password: crypto.AES.decrypt(
      "U2FsdGVkX184OwO6PNIDu3EMkVvIrf7JAt/iyLo1d9E=",
      process.env.NANO_PRIVATE_KEY ?? ""
    ).toString(),
  });

  const user = await prisma.user.findMany({
    where: {
      userId,
      // password: crypto.AES.encrypt(password, "aa").toString(),
      password,
    },
  });

  return res.send(user);
}
