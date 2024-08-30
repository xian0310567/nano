import { AuthResponse } from "@supabase/supabase-js";

export type CreateUserServiceCallback = {
  createUser: () => Promise<AuthResponse>;
};
