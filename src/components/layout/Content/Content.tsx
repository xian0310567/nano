import React from "react";
import { Layout } from "antd";

import styled from "./lib/content.module.css";

const Content = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;
  return <Content className={styled.content}>{children}</Content>;
};

export default Content;
