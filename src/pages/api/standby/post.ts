// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Standby } from "@prisma/client";
import moment from "moment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Standby | string>
) {
  const prisma = new PrismaClient();

  const { url } = req.body;
  if (!url) {
    return res.status(400).send("not found body: url");
  }

  const standby = await prisma.standby.create({
    data: {
      url: url,
      uploadDate: moment().add(9, "hour").format(),
      authorId: 1,
    },
  });

  return res.status(200).send(standby);
}
