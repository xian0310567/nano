import React from "react";
import { useRouter } from "next/router";
import { Layout as ALayout } from "antd";

import Header from "@/components/layout/Header";
import Content from "@/components/layout/Content";
import Sider from "@/components/layout/Sider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  if (route.pathname === "/login") return <>{children}</>;
  if (route.pathname === "/signup") return <>{children}</>;

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
