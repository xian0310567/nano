import { useRouter } from "next/router";
import { supabase } from "@/hooks/data";

import useSessionStorage from "@/hooks/common/useSessionStorage";

import { SignInStateCallback } from "../types/useSignInState.type";
import { SignInCallback } from "../types/services/signIn.type";

const service = (state: SignInStateCallback): SignInCallback => {
  const router = useRouter();
  const { setSessionStorage } = useSessionStorage();

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.getter.userName,
      password: state.getter.passWord,
    });

    if (data && data.session) {
      router.push("/");
    }
  };

  return { signIn };
};

export default service;
