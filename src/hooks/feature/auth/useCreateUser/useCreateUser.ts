import useCreateUserState from "./useCreateUserState";
import useCreateUserService from "./services";

import { CreateUserCallback } from "./types/useCreateUser.type";

const useCreateUser = (): CreateUserCallback => {
  const state = useCreateUserState();
  const service = useCreateUserService(state);

  return { state: state.getter, ...service };
};

export default useCreateUser;
