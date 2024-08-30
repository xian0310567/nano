import { SignInStateCallback } from "../types/useSignInState.type";
import {
  SetUserInfoCallback,
  UserSetterType,
} from "../types/services/setUserInfo.type";

const service = (state: SignInStateCallback): SetUserInfoCallback => {
  const setUserInfo = (type: UserSetterType, value: string) => {
    if (type === "username") state.setter.setUserName(value);
    if (type === "password") state.setter.setPassWord(value);
  };

  return { setUserInfo };
};

export default service;
