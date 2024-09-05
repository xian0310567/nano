import type { NextApiRequest, NextApiResponse } from "next";

import getItems from "./services/getItems";
import deleteItems from "./services/deleteItems";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  switch (req.method) {
    case "GET":
      return getItems(req, res);
    case "DELETE":
      return deleteItems(req, res);
    default:
      res.status(404).send("not found method");
  }
}
