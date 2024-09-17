import { Table } from "antd";
import Link from "next/link";

import pendingProductTableColumn from "./PendingProductTable.column";

import { PendingProductTableProps } from "./PendingProductTable.type";

const PendingProductTable = (props: PendingProductTableProps) => {
  const column = pendingProductTableColumn();

  return (
    <Table
      dataSource={props.pendingState}
      columns={column}
      loading={!props.pendingState}
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

export default PendingProductTable;
