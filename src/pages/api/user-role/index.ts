import type { NextApiRequest, NextApiResponse } from "next";

import getRole from "./services/getRole";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getRole(req, res);
    default:
      res.status(404).send("not found method");
  }
}
