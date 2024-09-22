import type { NextApiRequest, NextApiResponse } from "next";

import getProducts from "./services/getProducts";
import postProduct from "./services/post";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    case "POST":
      return postProduct(req, res);
    default:
      res.status(404).send("not found method");
  }
}
