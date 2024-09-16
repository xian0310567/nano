"use client";

import axios from "axios";
import { useRouter } from "next/router";
import { message } from "antd";

import useRefreshSession from "@/hooks/feature/auth/useRefreshSession";

const RedirectProvider = () => {
  const router = useRouter();
  const { refreshSession } = useRefreshSession();

  message.config({
    maxCount: 1,
  });

  axios.interceptors.response.use(
    (response) => {
      if (response.status === 204) message.warning("데이터가 없습니다");
      return response;
    },
    async (err) => {
      const originalRequest = err.config;

      if (
        err.response &&
        err.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        try {
          await refreshSession(); // /api/temp 호출로 access_token 갱신

          // 갱신된 access_token이 쿠키에 자동으로 저장되었으므로 요청 재시도
          return axios(originalRequest);
        } catch (tempError) {
          router.push("/login");
          message.error("세션이 만료되었습니다.");
          return Promise.reject(tempError);
        }
      }

      return Promise.reject(err);
    }
  );

  return <></>;
};

export default RedirectProvider;
