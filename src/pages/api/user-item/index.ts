import type { NextApiRequest, NextApiResponse } from "next";

import confirmItem from "./patch";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "PATCH":
      return confirmItem(req, res);
    default:
      res.status(404).send("not found method");
  }
}
