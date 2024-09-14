import type { NextApiRequest, NextApiResponse } from "next";

import getMenu from "./services/getMenu";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getMenu(req, res);
    default:
      res.status(404).send("not found method");
  }
}

export type { Menu } from "./services/getMenu";
