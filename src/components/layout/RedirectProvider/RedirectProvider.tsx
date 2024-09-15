"use client";

import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { message } from "antd";

import useRetrieveSession from "@/hooks/feature/auth/useRetrieveSession";
// import useRefreshSession from "@/hooks/feature/auth/useRefreshSession";

const RedirectProvider = () => {
  const router = useRouter();
  const { retrieveSession } = useRetrieveSession();

  message.config({
    maxCount: 1,
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      if (err.response && err.response.status === 401) {
        router.push("/login");
        message.error("세션이 만료되었습니다.");
      }
      return Promise.reject(err);
    }
  );

  // useEffect(() => {
  //   if (router.pathname === "/login") return;

  //   const validateSession = async () => {
  //     const { data } = await retrieveSession();

  //     if (data.session && !data.session.access_token) {
  //       router.push("/login");
  //       messageApi.open({ type: "error", content: "세션이 만료되었습니다." });
  //     }
  //   };

  //   validateSession();
  // }, [router]);

  return <></>;
};

export default RedirectProvider;
