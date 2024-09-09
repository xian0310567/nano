import { Role } from "@/pages/api/user-role/services/getRole";
import { AxiosResponse } from "axios";

export type GetUserRoleCallback = {
  getUserRole: (
    authCode: string
  ) => Promise<AxiosResponse<GetUserRoleResponse, any>>;
};

export type GetUserRoleResponse = Role;
