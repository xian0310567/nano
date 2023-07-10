import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto-js";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.body;

  if (!userId) return "not found params [userId]";

  const user = await prisma.user.findUnique({
    where: {
      userId,
      // password: crypto.AES.encrypt(password, "aa").toString(),
    },
  });

  return res.send(user);
}
