import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import getUser from "@/pages/api/common/getUser";

export type Product = {
  id: number;
  name: string;
  url: string;
  price: number;
  uploader: string;
  created_at: string;
  standby: string;
};

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
    .ilike("name", `%${name}%`)
    .returns<Product[]>();

  if (!data) return res.status(204).send("not found product lists");

  return res.status(200).send(data);
}
