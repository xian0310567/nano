import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import getUser from "@/pages/api/common/getUser";

export type Pending = {
  id: string;
  created_at: string;
  name: string;
  recommend_price: string;
  image: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pending[] | string>
) {
  const { access_token, refresh_token } = req.cookies;

  const user = await getUser({ access_token, refresh_token });

  if (!user) return res.status(401).send("Authentication failed");

  const { data, error } = await supabase
    .from("pending-product")
    .select("*")
    .returns<Pending[]>();

  if (!data) return res.status(204).send("not found pending-products");

  return res.status(200).send(data);
}
