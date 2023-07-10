import React from "react";
import { useRouter } from "next/router";
import { Layout as ALayout } from "antd";

import Header from "@/components/layout/Header";
import Content from "@/components/layout/Content";
import Sider from "@/components/layout/Sider";

import useAuthValidation from "@/hooks/feature/auth/useAuthValidation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useAuthValidation();

  if (router.pathname === "/signUp") return <Content>{children}</Content>;
  else if (router.pathname === "/login") return <>{children}</>;

  return (
    <ALayout>
      <Header />
      <ALayout>
        <Sider />
        <Content>{children}</Content>
      </ALayout>
    </ALayout>
  );
};

export default Layout;
