import { useState } from "react";

import { CreateUserStateCallback } from "./types/useCreateUserState";

const useCreateUserState = (): CreateUserStateCallback => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  return {
    getter: { userName, passWord },
    setter: { setUserName, setPassWord },
  };
};

export default useCreateUserState;
