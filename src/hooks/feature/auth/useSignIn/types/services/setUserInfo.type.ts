export type SetUserInfoCallback = {
  setUserInfo: (type: UserSetterType, value: string) => void;
};

export type UserSetterType = "username" | "password";
