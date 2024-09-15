import React from "react";

import { Table } from "antd";
import Link from "next/link";

import ItemsTableColumn from "./ItemTable.column";

import { ItemsTableProps } from "./ItemsTable.type";

const ItemsTable = (props: ItemsTableProps) => {
  const columns = ItemsTableColumn();

  return (
    <Table
      loading={!props.products}
      dataSource={props.products}
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <Link style={{ margin: 0 }} href={record.url} target="_blank">
            {record.url}
          </Link>
        ),
      }}
    />
  );
};

export default ItemsTable;
