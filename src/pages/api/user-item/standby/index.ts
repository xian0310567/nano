import type { NextApiRequest, NextApiResponse } from "next";

import getItems from "./get";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getItems(req, res);
    default:
      res.status(404).send("not found method");
  }
}
