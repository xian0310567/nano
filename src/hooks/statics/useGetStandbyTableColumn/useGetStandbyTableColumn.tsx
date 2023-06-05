import React from "react";
import moment from "moment";

import UploadState from "@/components/feature/standby/UploadState";

import { StandbyItemDataSource } from "@/hooks/feature/standby/useGetStandbyItems";
import type { ColumnsType } from "antd/es/table";

const useGetStandbyTableColumn = (): {
  columns: ColumnsType<StandbyItemDataSource>;
} => {
  const columns: ColumnsType<StandbyItemDataSource> = [
    {
      title: "id",
      key: "key",
      dataIndex: "id",
      width: "5%",
    },
    {
      title: "링크",
      width: "30%",
      key: "url",
      dataIndex: "url",
      fixed: "left",
      render: (text) => (
        <a
          href={text}
          target="_blank"
          style={{
            display: "block",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "업로드",
      key: "uploadDate",
      dataIndex: "uploadDate",
      width: "10%",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "상태",
      key: "state",
      dataIndex: "state",
      render: (text) => <UploadState state={text} />,
      onFilter: (value, record) => record.state == value,
      filters: [
        {
          text: "대기중",
          value: "upload",
        },
        {
          text: "업로드 성공",
          value: "reject",
        },
        {
          text: "업로드 거절",
          value: "complete",
        },
      ],
    },
  ];

  return { columns };
};

export default useGetStandbyTableColumn;
