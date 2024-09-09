import axios from "axios";

import {
  GetUserRoleCallback,
  GetUserRoleResponse,
} from "./useGetUserRole.type";

const useGetUserRole = (): GetUserRoleCallback => {
  const getUserRole = async (authCode: string) => {
    const res = await axios.get<GetUserRoleResponse>("/api/user-role", {
      params: { authCode },
    });

    return res;
  };
  return { getUserRole };
};

export default useGetUserRole;
