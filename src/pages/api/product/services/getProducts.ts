import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import getUser from "@/pages/api/common/getUser";

import { Product } from "@/pages/api/pending-product/services/getPendingProducts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | string>
) {
  const { access_token, refresh_token } = req.cookies;
  const { name } = req.query;

  const user = await getUser({ access_token, refresh_token });

  if (!user) return res.status(401).send("Authentication failed");

  const { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("state", "complete")
    .ilike("name", `%${name}%`)
    .returns<Product[]>();

  if (!data) return res.status(204).send("not found product lists");

  return res.status(200).send(data);
}
