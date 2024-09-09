import { AuthResponse } from "@supabase/supabase-js";

export type CreateUserServiceCallback = {
  createUser: (user: SignUpProps) => void;
};

export type SignUpProps = {
  userName: string;
  email: string;
  passWord: string;
  validPassWord: string;
  authType: "admin" | "user";
  authCode?: string;
};
