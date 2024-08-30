import React from "react";

import { Input, Button } from "antd";
import { Container } from "./SignInForm.styled";

import useSignIn from "@/hooks/feature/auth/useSignIn";

const SignInForm = () => {
  const { state, signIn, setUserInfo } = useSignIn();

  return (
    <Container>
      <Input
        size="large"
        placeholder="USERNAME"
        value={state.userName}
        onChange={(e) => setUserInfo("username", e.target.value)}
      />
      <Input
        size="large"
        type="password"
        placeholder="PASSWORD"
        value={state.passWord}
        onChange={(e) => setUserInfo("password", e.target.value)}
      />
      <Button onClick={signIn}>LOGIN</Button>
    </Container>
  );
};

export default SignInForm;
