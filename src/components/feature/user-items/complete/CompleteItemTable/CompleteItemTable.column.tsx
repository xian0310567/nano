import React from "react";
import moment from "moment";

import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";
import type { ColumnsType } from "antd/es/table";

type ColumnCallback = { columns: ColumnsType<Standby> };

const column = (): ColumnCallback => {
  const columns: ColumnsType<Standby> = [
    {
      title: "",
      key: "id",
      dataIndex: "id",
      width: 50,
    },
    {
      title: "링크",
      key: "url",
      dataIndex: "url",
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
      key: "created_at",
      dataIndex: "created_at",
      width: "120px",
      render: (text) => (
        <span
          style={{
            display: "block",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {moment(text).format("YYYY-MM-DD")}
        </span>
      ),
    },
  ];

  return { columns };
};

export default column;
