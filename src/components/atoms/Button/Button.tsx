import React from "react";

import { ButtonProps } from "./lib/button.interface";

import styled from "./lib/button.module.css";

const Button = ({ children }: ButtonProps) => {
  return <button className={`${styled.button}`}>{children}</button>;
};

export default Button;
