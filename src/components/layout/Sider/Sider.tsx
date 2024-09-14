import { Layout, Menu, Spin } from "antd";
import UtilLink from "@/components/layout/UtilLink";

import column from "./Sider.column";

import styled from "./lib/sider.module.css";

import { SiderProps } from "./Sider.type";

const Sider = (props: SiderProps) => {
  const { Sider } = Layout;
  const navMenu = column(props.menu);

  return (
    <Sider
      className={styled.sider}
      theme="light"
      style={{ position: "relative" }}
    >
      <Spin spinning={!props.menu.length}>
        <Menu className={styled.menu} items={navMenu} mode="inline" />
      </Spin>
      <UtilLink />
    </Sider>
  );
};

export default Sider;
