import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import getUser from "@/pages/api/common/getUser";

import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Standby[] | string>
) {
  const { access_token, refresh_token } = req.cookies;
  const { id, state, uploadPrice, description } = req.body;

  const user = await getUser({ access_token, refresh_token });

  if (!user) return res.status(401).send("Authentication failed");
  console.log({ id, state, uploadPrice, description });
  if (!id || !state || uploadPrice == undefined || !description)
    return res.status(400).send("not allow body");

  const { data, error } = await supabase
    .from("standby")
    .update({
      state,
      description,
      upload_price: uploadPrice,
    })
    .eq("id", id)
    .select()
    .returns<Standby[]>();

  if (!data) return res.status(204).send([]);

  return res.status(200).send(data);
}
