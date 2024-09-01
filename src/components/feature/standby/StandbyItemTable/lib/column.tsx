import React from "react";
import moment from "moment";

import UploadState from "@/components/feature/standby/UploadState";
import UploadDeleteButton from "@/components/feature/standby/UploadDeleteButton";

import {
  Standby,
  GetItemsCallback,
} from "@/hooks/feature/standby/useGetStandbyItems";
import type { ColumnsType } from "antd/es/table";

type ColumnProps = { getStandbyItems: GetItemsCallback["getStandbyItems"] };
type ColumnCallback = { columns: ColumnsType<Standby> };

const column = (props: ColumnProps): ColumnCallback => {
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
    {
      title: "상태",
      key: "state",
      dataIndex: "state",
      width: "80px",
      fixed: "right",
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
    {
      key: "delete",
      title: "",
      width: 80,
      align: "center",
      render: (record: Standby) => (
        <UploadDeleteButton
          record={record}
          getStandbyItems={props.getStandbyItems}
        />
      ),
    },
  ];

  return { columns };
};

export default column;
