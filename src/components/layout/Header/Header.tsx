import React from "react";

import { Layout } from "antd";
import Link from "next/link";

import styled from "./lib/header.module.css";

const Header = () => {
  const { Header } = Layout;

  return (
    <Header className={styled.header}>
      <h1>
        <Link href="/">Nano</Link>
      </h1>
    </Header>
  );
};

export default Header;
