import useCreateUserState from "./useCreateUserState";
import useCreateUserService from "./services";

import { CreateUserCallback } from "./types/useCreateUser.type";

const useCreateUser = (): CreateUserCallback => {
  const service = useCreateUserService();

  return service;
};

export default useCreateUser;
