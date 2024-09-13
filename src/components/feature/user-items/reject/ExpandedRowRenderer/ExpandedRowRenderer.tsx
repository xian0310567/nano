import React from "react";

import { ExpandedRowRendererProps } from "./ExpandedRowRenderer.type";

const ExpandedRowRenderer = (props: ExpandedRowRendererProps) => {
  return <div>{props.record.description}</div>;
};

export default ExpandedRowRenderer;
