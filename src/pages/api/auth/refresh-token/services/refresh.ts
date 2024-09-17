import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

type LoginResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  const { access_token, refresh_token } = req.cookies;

  if (!refresh_token || !access_token)
    return res.status(400).json({ message: "Authentication failed" });

  const { data, error } = await supabase.auth.refreshSession({ refresh_token });

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  const { session } = data;
  const accessToken = session?.access_token;
  const refreshToken = session?.refresh_token;

  res.setHeader("Set-Cookie", [
    `refresh_token=${refreshToken}; Path=/; HttpOnly; Secure; SameSite=Strict`,
    `access_token=${accessToken}; Path=/; HttpOnly; Secure; SameSite=Strict`,
  ]);

  return res.status(200).json({ message: "refresh session" });
}
