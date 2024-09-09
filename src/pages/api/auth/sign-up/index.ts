import type { NextApiRequest, NextApiResponse } from "next";

import createUser from "./services/createUser";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return createUser(req, res);
    default:
      res.status(404).send("not found method");
  }
}
