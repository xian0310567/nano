import { CreateUserServiceCallback } from "./services/createUser.type";
import { SetRegisterInfoCallback } from "./services/SetRegisterInfo.type";

export type CreateUserServicesCallback = CreateUserServiceCallback &
  SetRegisterInfoCallback;
