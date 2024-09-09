import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";

import { message } from "antd";
import useGetUserRole, {
  GetUserRoleResponse,
} from "@/hooks/feature/userRole/useGetUserRole";

import {
  CreateUserServiceCallback,
  SignUpProps,
} from "../types/services/createUser.type";
import { Role } from "@/pages/api/user-role/services/getRole";
import { AuthResponse } from "@supabase/supabase-js";

const service = (): CreateUserServiceCallback => {
  const router = useRouter();
  const { getUserRole } = useGetUserRole();

  const createUser = async (user: SignUpProps) => {
    let role: AxiosResponse<Role, any>;

    try {
      if (user.authType === "admin" && user.authCode) {
        try {
          role = await getUserRole(user.authCode);
        } catch (err: any) {
          if (err.response.status === 500) {
            return message.error("관리자 코드를 확인해주세요.");
          }
        }
      }

      const res = await axios.post<AuthResponse>("/api/auth/sign-up", {
        email: user.email,
        password: user.passWord,
        userName: user.userName,
        role: user.authType,
      });

      if (res.status === 201) {
        router.push("/login");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        message.error("중복된 이메일이 있습니다.");
      } else {
        message.error("회원가입 중 에러가 발생했습니다.");
      }
    }
  };

  return { createUser };
};

export default service;
