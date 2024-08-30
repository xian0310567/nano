import { useState } from "react";

import { SignInStateCallback } from "./types/useSignInState.type";

const useSignInState = (): SignInStateCallback => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  return {
    getter: { userName, passWord },
    setter: { setUserName, setPassWord },
  };
};

export default useSignInState;
