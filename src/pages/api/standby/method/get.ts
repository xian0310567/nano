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
  let filter = {};

  if (user) {
    filter = {
      where: {
        authorId: parseInt(user + ""),
      },
    };
  } else {
    filter = {
      where: {
        state: "upload",
      },
    };
  }

  const standby = await prisma.standby.findMany(filter);

  return res.status(200).send(standby);
}
