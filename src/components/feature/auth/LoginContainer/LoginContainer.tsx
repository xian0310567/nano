import React from "react";

import styled from "./lib/loginContainer.module.css";

const LoginContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={styled.container}>
      <div className={styled.bg}>{children}</div>
    </div>
  );
};

export default LoginContainer;
