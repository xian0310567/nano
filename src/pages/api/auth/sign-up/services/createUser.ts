import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";
import { User, Session, AuthError } from "@supabase/supabase-js";

type AuthResponse =
  | {
      message: string;
    }
  | { user: User | null; session: Session | null }
  | AuthError;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) {
  const { email, password, userName, role } = req.body;

  if (!email || !password || !userName || !role) {
    return res.status(401).json({ message: "Invalid Request" });
  }

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: userName,
        role: role,
      },
    },
  });

  if (error) {
    if (error.status === 422)
      return res.status(422).json({ message: error.message });
  }

  // Respond with the user data
  return res.status(201).json(data);
}
