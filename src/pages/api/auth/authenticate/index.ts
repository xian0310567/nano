import type { NextApiRequest, NextApiResponse } from "next";

import findUser from "./action/findUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
  } else if (req.method == "POST") {
    return findUser(req, res);
  }
}
