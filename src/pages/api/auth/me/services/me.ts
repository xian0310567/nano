import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

import { User } from "@supabase/supabase-js";

type AuthResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse | User>
) {
  const access_token = req.cookies.access_token;
  const refresh_token = req.cookies.refresh_token;

  if (!access_token || !refresh_token) {
    return res.status(400).json({ message: "session is required" });
  }

  await supabase.auth.setSession({ access_token, refresh_token });

  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    return res
      .status(401)
      .json({ message: "Invalid access token or unable to fetch user" });
  }

  // Respond with the user data
  return res.status(200).json(user.user);
}
