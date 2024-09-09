import React from "react";

import Container from "@/components/feature/login/Container";
import Logo from "@/components/feature/login/Logo";
import SignInForm from "@/components/feature/login/SignInForm";
import RedirectDescription from "@/components/feature/login/RedirectDescription";

const login = () => {
  return (
    <Container>
      <Logo />
      <SignInForm />
      <RedirectDescription />
    </Container>
  );
};

export default login;
