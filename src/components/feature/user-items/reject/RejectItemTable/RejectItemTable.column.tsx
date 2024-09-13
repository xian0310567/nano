import React from "react";
import moment from "moment";

import Link from "next/link";
import UploadState from "@/components/feature/user-items/standby/UploadState";

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
        <Link
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
        </Link>
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
    {
      title: "상태",
      key: "state",
      dataIndex: "state",
      width: "80px",
      fixed: "right",
      render: (text) => <UploadState state={text} />,
    },
  ];

  return { columns };
};

export default column;
