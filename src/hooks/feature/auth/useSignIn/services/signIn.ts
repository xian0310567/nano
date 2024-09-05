import { useRouter } from "next/router";
import axios from "axios";

import { SignInStateCallback } from "../types/useSignInState.type";
import { SignInCallback } from "../types/services/signIn.type";

const service = (state: SignInStateCallback): SignInCallback => {
  const router = useRouter();

  const signIn = async () => {
    const res = await axios.post("/api/auth/login", {
      email: state.getter.userName,
      password: state.getter.passWord,
    });

    if (res.status === 200) {
      router.push("/");
    }
  };

  return { signIn };
};

export default service;
