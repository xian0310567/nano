import React from "react";

import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

import styled from "./lib/loginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styled.container}>
      <Input image="/user.svg" placeholder="USERNAME" />
      <Input image="/lock.svg" placeholder="PASSWORD" type="password" />
      <Button>LOGIN</Button>
    </div>
  );
};

export default LoginForm;
