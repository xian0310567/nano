import type { NextApiRequest, NextApiResponse } from "next";

import getProducts from "./services/getProducts";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    default:
      res.status(404).send("not found method");
  }
}
