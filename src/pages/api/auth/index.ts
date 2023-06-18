import type { NextApiRequest, NextApiResponse } from "next";

import register from "./method/post/register";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    // return get(req, res);
  } else if (req.method == "POST") {
    register(req, res);
  }
}
