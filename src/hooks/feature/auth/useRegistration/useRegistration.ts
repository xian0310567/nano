import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { message } from "antd";

import { encodeText } from "@/hooks/common/useCrypto";

import { RegisterUserProps } from "./lib/useRegistration.interface";

const useRegistration = () => {
  const router = useRouter();

  const registerUser = ({
    userId,
    email,
    password,
    name,
  }: RegisterUserProps) => {
    axios
      .post("/api/auth", {
        id: userId,
        email,
        password: encodeText(password),
        name,
      })
      .then(() => {
        message.success("회원가입이 완료되었습니다.");
        router.push("/");
      });
  };

  return { registerUser };
};

export default useRegistration;
