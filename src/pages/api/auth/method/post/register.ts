import crypto from "crypto-js";

import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | string>
) {
  const prisma = new PrismaClient();

  const user = await prisma.user.create({
    data: {
      userId: req.body.id,
      email: req.body.email,
      name: req.body.name,
      // password: req.body.password,
      password: crypto.AES.encrypt(
        req.body.password,
        process.env.NANO_PRIVATE_KEY ?? ""
      ).toString(),
    },
  });

  return res.status(200).send(user);
}
