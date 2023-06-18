import React from "react";

import LoginForm from "@/components/feature/auth/LoginForm";

import styled from "@/styles/signIn.module.css";

const signIn = () => {
  return (
    <div className={styled.container}>
      <LoginForm />
    </div>
  );
};

export default signIn;
