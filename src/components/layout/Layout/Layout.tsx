import React from "react";
import { Layout as ALayout } from "antd";

import Header from "@/components/layout/Header";
import Content from "@/components/layout/Content";
import Sider from "@/components/layout/Sider";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
