export type SignInStateCallback = {
  getter: SignInStateGetter;
  setter: SignInStateSetter;
};

export type SignInStateGetter = {
  userName: string;
  passWord: string;
};

export type SignInStateSetter = {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassWord: React.Dispatch<React.SetStateAction<string>>;
};
