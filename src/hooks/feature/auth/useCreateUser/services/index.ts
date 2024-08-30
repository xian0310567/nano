import createUserService from "./createUser";
import setRegisterInfoService from "./setRegisterInfo";

import { CreateUserStateCallback } from "../types/useCreateUserState";
import { CreateUserServicesCallback } from "../types/useCreateUserService.type";

const index = (state: CreateUserStateCallback): CreateUserServicesCallback => {
  const { createUser } = createUserService(state);
  const { setRegisterInfo } = setRegisterInfoService(state);

  return { createUser, setRegisterInfo };
};

export default index;
