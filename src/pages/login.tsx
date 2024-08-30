import React from "react";

import Container from "@/components/feature/login/Container";
import Logo from "@/components/feature/login/Logo";
import SignInForm from "@/components/feature/login/SignInForm";

const login = () => {
  return (
    <Container>
      <Logo />
      <SignInForm />
    </Container>
  );
};

export default login;
