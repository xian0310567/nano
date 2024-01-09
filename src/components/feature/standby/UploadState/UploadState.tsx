import React from "react";

import { Tag } from "antd";
import { StandbyState } from "@/hooks/feature/standby/useGetStandbyItems";

const UploadState = ({ state }: { state: StandbyState }) => {
  const colorRender = {
    reject: "error",
    upload: "processing",
    complete: "success",
  };

  const textRender = {
    reject: "업로드 거절",
    upload: "대기중",
    complete: "업로드 성공",
  };

  return (
    <Tag color={colorRender[state]}>
      <span>{textRender[state]}</span>
    </Tag>
  );
};

export default UploadState;
