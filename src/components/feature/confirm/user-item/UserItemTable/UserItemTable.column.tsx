import React from "react";
import moment from "moment";

import Link from "next/link";
import ConfirmUserItem from "@/components/feature/confirm/user-item/ConfirmUserItem";

import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";
import { ConfirmItem } from "@/hooks/feature/confirm/user-item/usePatchConfirmItem";
import type { ColumnsType } from "antd/es/table";

type ColumnCallback = ColumnsType<Standby>;
type ColumnProps = (confirmItem: ConfirmItem) => void;

const column = (patchConfirmItem: ColumnProps): ColumnCallback => {
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
      ellipsis: true,
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
      title: "",
      key: "state",
      dataIndex: "upload_price",
      width: "80px",
      render: (_, record) => (
        <ConfirmUserItem record={record} patchConfirmItem={patchConfirmItem} />
      ),
    },
  ];

  return columns;
};

export default column;
