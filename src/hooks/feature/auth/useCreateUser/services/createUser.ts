import { supabase } from "@/hooks/data";

import { CreateUserStateCallback } from "../types/useCreateUserState";
import { CreateUserServiceCallback } from "../types/services/createUser.type";

const service = (state: CreateUserStateCallback): CreateUserServiceCallback => {
  const createUser = async () => {
    const data = await supabase.auth.signUp({
      email: state.getter.userName,
      password: state.getter.passWord,
      options: {
        data: {
          role: "user",
        },
      },
    });

    return data;
  };

  return { createUser };
};

export default service;
