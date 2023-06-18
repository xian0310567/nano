import React from "react";

import RegisterForm from "@/components/feature/auth/RegisterForm";

import styled from "@/styles/signIn.module.css";

const signIn = () => {
  return (
    <div className={styled.container}>
      <RegisterForm />
    </div>
  );
};

export default signIn;
