import React from "react";

import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

import useUserInfo from "@/hooks/feature/auth/useUserInfo";

import styled from "./lib/loginForm.module.css";

const LoginForm = () => {
  const { userInfo, setUserId, setPassword } = useUserInfo();

  return (
    <div className={styled.container}>
      <Input
        image="/user.svg"
        placeholder="USERNAME"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <Input
        image="/lock.svg"
        placeholder="PASSWORD"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          userInfo();
        }}
      >
        LOGIN
      </Button>
    </div>
  );
};

export default LoginForm;
