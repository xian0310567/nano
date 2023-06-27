import React from "react";

import { ButtonProps } from "./lib/button.interface";

import styled from "./lib/button.module.css";

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={`${styled.button}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
