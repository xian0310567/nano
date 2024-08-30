import { CreateUserStateGetter } from "./useCreateUserState";
import { CreateUserServicesCallback } from "./useCreateUserService.type";

export type CreateUserCallback = {
  state: CreateUserStateGetter;
} & CreateUserServicesCallback;
