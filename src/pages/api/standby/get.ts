// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Standby } from "@prisma/client";
import moment from "moment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Standby[] | string>
) {
  const prisma = new PrismaClient();

  const { user } = req.query;
  if (!user) {
    return res.status(400).send("not found query: user");
  }

  const standby = await prisma.standby.findMany({
    where: {
      authorId: parseInt(user + ""),
    },
  });

  return res.status(200).send(standby);
}
