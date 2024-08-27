import { supabase } from "@/hooks/data";

import { SignInStateCallback } from "../types/useSignInState.type";
import { SignInCallback } from "../types/services/signIn.type";

const service = (state: SignInStateCallback): SignInCallback => {
  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.getter.userName,
      password: state.getter.passWord,
    });

    console.log(data);
  };

  return { signIn };
};

export default service;
