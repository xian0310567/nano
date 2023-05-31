import React from "react";
import { Layout } from "antd";

const Content = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;
  return <Content>{children}</Content>;
};

export default Content;
