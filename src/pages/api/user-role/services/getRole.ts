import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/hooks/data";

export type Role = {
  id: number;
  role: "user" | "master";
  name: string;
  code: string;
  active: boolean;
};

type GetRoleCallback = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetRoleCallback | Role>
) {
  const { authCode } = req.query;

  if (!authCode) return res.status(400).send({ message: "not found authCode" });

  const { data, error } = await supabase
    .from("user_roles_permissions")
    .select("*")
    .eq("code", authCode)
    .returns<Role[]>();

  if (!data) return res.status(500).send({ message: "unverified roleCode" });

  return res.status(200).send(data[0]);
}
