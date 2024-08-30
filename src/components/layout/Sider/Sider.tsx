import React from "react";
import { Layout, Menu } from "antd";

import getMenuList from "@/hooks/statics/useGetMenuList";

import styled from "./lib/sider.module.css";

const Sider = () => {
  const { Sider } = Layout;
  const { navMenu } = getMenuList();

  return (
    <Sider className={styled.sider}>
      <Menu className={styled.menu} items={navMenu} mode="inline" />
    </Sider>
  );
};

export default Sider;
