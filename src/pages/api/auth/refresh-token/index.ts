import type { NextApiRequest, NextApiResponse } from "next";

import refresh from "./services/refresh";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return refresh(req, res);
    default:
      res.status(404).send("not found method");
  }
}
