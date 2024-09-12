import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import getUser from "@/pages/api/common/getUser";

import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";

type AddItemsBody = {
  url: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Standby | string>
) {
  const { access_token, refresh_token } = req.cookies;
  const record = req.body as AddItemsBody;

  const user = await getUser({ access_token, refresh_token });

  if (!user) return res.status(401).send("Authentication failed");

  const { data } = await supabase
    .from("standby")
    .insert({
      url: record.url,
      state: "upload",
      user_aid: user.id,
    })
    .select()
    .returns<Standby[]>();

  if (!data) return res.status(500).send("not found stanby items");

  return res.status(200).send(data[0]);
}
