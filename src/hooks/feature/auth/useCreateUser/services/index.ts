import createUserService from "./createUser";

import { CreateUserServicesCallback } from "../types/useCreateUserService.type";

const index = (): CreateUserServicesCallback => {
  const { createUser } = createUserService();

  return { createUser };
};

export default index;
