import React from "react";

import styled from "./lib/input.module.css";

const Input = ({
  image,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  image: string;
  placeholder?: string;
  type?: "text" | "password";
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={styled.input}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};

export default Input;
