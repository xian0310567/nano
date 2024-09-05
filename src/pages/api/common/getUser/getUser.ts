import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import { User } from "@supabase/supabase-js";

type GetUserHandlerProps = {
  access_token: string | undefined;
  refresh_token: string | undefined;
};

type GetUserHandlerCallback = User | null;

const handler = async (
  props: GetUserHandlerProps
): Promise<GetUserHandlerCallback> => {
  const access_token = props.access_token;
  const refresh_token = props.refresh_token;

  if (!access_token || !refresh_token) {
    return null;
  }

  await supabase.auth.setSession({ access_token, refresh_token });

  const { data } = await supabase.auth.getUser();

  return data.user;
};

export default handler;
