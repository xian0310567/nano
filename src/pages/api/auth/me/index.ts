import type { NextApiRequest, NextApiResponse } from "next";

import me from "./services/me";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return me(req, res);
    default:
      res.status(404).send("not found method");
  }
}
