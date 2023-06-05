import React from "react";
import moment from "moment";

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
    },
  ];

  return { columns };
};

export default useGetStandbyTableColumn;
