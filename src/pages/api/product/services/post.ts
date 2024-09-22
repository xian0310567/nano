import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import getUser from "@/pages/api/common/getUser";

import { Product } from "@/pages/api/pending-product/services/getPendingProducts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | string>
) {
  const { access_token, refresh_token } = req.cookies;
  const { id, imageUrl } = req.body;

  const user = await getUser({ access_token, refresh_token });

  if (!user) return res.status(401).send("Authentication failed");

  const { data, error } = await supabase
    .from("product")
    .update({ image: imageUrl, uploader: user.id, state: "complete" })
    .eq("id", id)
    .select()
    .returns<Product[]>();

  if (!data) return res.status(500).send("error");

  return res.status(200).send(data);
}
