import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

type LoginResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ message: error.message });
  }

  const { session } = data;
  const accessToken = session?.access_token;
  const refreshToken = session?.refresh_token;

  if (!accessToken) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  res.setHeader("Set-Cookie", [
    `refresh_token=${refreshToken}; Path=/; HttpOnly; Secure; SameSite=Strict`,
    `access_token=${accessToken}; Path=/; HttpOnly; Secure; SameSite=Strict`,
  ]);

  return res.status(200).json({ message: "Login successful" });
}
