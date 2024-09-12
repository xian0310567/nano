import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import getUser from "@/pages/api/common/getUser";

import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Standby[] | string>
) {
  const { access_token, refresh_token } = req.cookies;

  const user = await getUser({ access_token, refresh_token });

  if (!user) return res.status(401).send("Authentication failed");

  const { data, error } = await supabase
    .from("standby")
    .select("*")
    .eq("state", "complete")
    .eq("user_aid", user.id)
    .returns<Standby[]>();

  if (!data) return res.status(204).send([]);

  return res.status(200).send(data);
}
