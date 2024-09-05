import type { NextApiRequest, NextApiResponse } from "next";

import login from "./services/login";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  switch (req.method) {
    case "POST":
      return login(req, res);
    default:
      res.status(404).send("not found method");
  }
}
