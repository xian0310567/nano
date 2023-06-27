import crypto from "crypto-js";

import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | string>
) {
  const prisma = new PrismaClient();

  const { id, email, name, password } = req.body;

  const user = await prisma.user.create({
    data: {
      userId: id,
      email: email,
      name: name,
      // password: crypto.AES.encrypt(
      //   password,
      //   process.env.NANO_PRIVATE_KEY ?? ""
      // ).toString(),
      password,
    },
  });

  return res.status(200).send(user);
}
