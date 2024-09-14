import React from "react";

import { Layout, Menu } from "antd";
import UtilLink from "@/components/layout/UtilLink";

import getMenuList from "@/hooks/statics/useGetMenuList";

import styled from "./lib/sider.module.css";

const Sider = () => {
  const { Sider } = Layout;
  const { navMenu } = getMenuList();

  return (
    <Sider
      className={styled.sider}
      theme="light"
      style={{ position: "relative" }}
    >
      <Menu className={styled.menu} items={navMenu} mode="inline" />
      <UtilLink />
    </Sider>
  );
};

export default Sider;
