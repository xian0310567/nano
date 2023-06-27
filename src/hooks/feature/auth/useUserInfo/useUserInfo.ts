import React from "react";
import { signIn } from "next-auth/react";

import { UserInfoProps } from "./lib/useUserInfo.interface";

const useUserInfo = () => {
  const [userId, setUserId] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const userInfo = async () => {
    const credentials = await signIn("credentials", {
      userId,
      password,
      redirect: false,
    });

    console.log(credentials);
  };

  return { userInfo, setUserId, setPassword };
};

export default useUserInfo;
