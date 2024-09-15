import type { NextApiRequest, NextApiResponse } from "next";

import getPendingProducts from "./services/getPendingProducts";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getPendingProducts(req, res);
    default:
      res.status(404).send("not found method");
  }
}
