import { useEffect } from "react";
import { useRouter } from "next/router";

import { message } from "antd";

import useRetrieveSession from "@/hooks/feature/auth/useRetrieveSession";
// import useRefreshSession from "@/hooks/feature/auth/useRefreshSession";

const RedirectProvider = () => {
  const router = useRouter();
  const { retrieveSession } = useRetrieveSession();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (router.pathname === "/login") return;

    const validateSession = async () => {
      const { data } = await retrieveSession();

      if (data.session && !data.session.access_token) {
        router.push("/login");
        messageApi.open({ type: "error", content: "세션이 만료되었습니다." });
      }
    };

    validateSession();
  }, [router]);

  return <>{contextHolder}</>;
};

export default RedirectProvider;
