import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import getUser from "@/pages/api/common/getUser";

export type Product = {
  id: string;
  created_at: string;
  name: string;
  url: string;
  price: number;
  uploader: string;
  recommend_price: string;
  image: string;
  upload_price: string;
  state: "pending" | "complete";
  standby: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | string>
) {
  const { access_token, refresh_token } = req.cookies;

  const user = await getUser({ access_token, refresh_token });

  if (!user) return res.status(401).send("Authentication failed");

  const { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("state", "pending")
    .returns<Product[]>();

  if (!data) return res.status(204).send("not found pending-products");

  return res.status(200).send(data);
}
