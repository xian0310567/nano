import { useEffect } from "react";
import { useRouter } from "next/router";
import { Layout as ALayout } from "antd";

import Header from "@/components/layout/Header";
import Content from "@/components/layout/Content";
import Sider from "@/components/layout/Sider";
import ChannelTalk from "@/components/layout/ChannelTalk";

import useGetMenus from "@/hooks/layout/useGetMenus";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  const getMenu = useGetMenus();

  useEffect(() => {
    getMenu.getMenus();
  }, [route.pathname]);

  if (route.pathname === "/login") return <>{children}</>;
  if (route.pathname === "/signup") return <>{children}</>;

  return (
    <>
      <ChannelTalk />
      <ALayout>
        <Header />
        <ALayout>
          <Sider menu={getMenu.menu} />
          <Content>{children}</Content>
        </ALayout>
      </ALayout>
    </>
  );
};

export default Layout;
