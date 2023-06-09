import type { NextApiRequest, NextApiResponse } from "next";

import register from "./method/post/register";
import findUser from "./method/get/authGet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    return findUser(req, res);
  } else if (req.method == "POST") {
    return register(req, res);
  }
}
