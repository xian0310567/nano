import React from "react";

import { CreateUserStateCallback } from "../types/useCreateUserState";
import {
  SetRegisterInfoCallback,
  RegisterInfoType,
} from "../types/services/SetRegisterInfo.type";

const service = (state: CreateUserStateCallback): SetRegisterInfoCallback => {
  const setRegisterInfo = (type: RegisterInfoType, value: string) => {
    if (type === "username") state.setter.setUserName(value);
    if (type === "password") state.setter.setPassWord(value);
  };

  return { setRegisterInfo };
};

export default service;
