import React from "react";
import { Layout } from "antd";

import styled from "./lib/header.module.css";

const Header = () => {
  const { Header } = Layout;

  return (
    <Header className={styled.header}>
      <h1>Nano</h1>
    </Header>
  );
};

export default Header;
