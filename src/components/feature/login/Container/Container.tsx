import React from "react";

import { Space } from "./Container.styled";

import { ContainerProps } from "./Container.type";

const Container = (props: ContainerProps) => {
  return <Space>{props.children}</Space>;
};

export default Container;
