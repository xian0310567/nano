export type SetRegisterInfoCallback = {
  setRegisterInfo: (type: RegisterInfoType, value: string) => void;
};

export type RegisterInfoType = "username" | "password";
