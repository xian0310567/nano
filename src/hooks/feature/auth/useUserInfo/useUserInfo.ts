import React from "react";
import { useRouter } from "next/router";
import { signIn, SignInResponse } from "next-auth/react";

import { UserInfoProps, UserLoginCallback } from "./lib/useUserInfo.interface";

const useUserInfo = () => {
  const router = useRouter();
  const [userId, setUserId] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [credential, setCredential] = React.useState<SignInResponse>();

  const userInfo = async () => {
    signIn("credentials", {
      userId,
      password,
      redirect: false,
    }).then((res) => {
      setCredential(res);
    });
  };

  React.useEffect(() => {
    if (credential?.ok && credential.status) {
      router.push("/");
    }
  }, [credential]);

  return { userInfo, setUserId, setPassword };
};

export default useUserInfo;
