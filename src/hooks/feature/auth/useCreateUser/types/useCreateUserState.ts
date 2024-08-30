export type CreateUserStateCallback = {
  getter: CreateUserStateGetter;
  setter: CreateUserStateSetter;
};

export type CreateUserStateGetter = {
  userName: string;
  passWord: string;
};

export type CreateUserStateSetter = {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassWord: React.Dispatch<React.SetStateAction<string>>;
};
