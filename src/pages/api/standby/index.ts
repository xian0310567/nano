// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import get from "./get";
import post from "./post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    return get(req, res);
  } else if (req.method == "POST") {
    return post(req, res);
  }
}
