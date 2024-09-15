import { Table } from "antd";

import pendingProductTableColumn from "./PendingProductTable.column";

import { PendingProductTableProps } from "./PendingProductTable.type";

const PendingProductTable = (props: PendingProductTableProps) => {
  const column = pendingProductTableColumn();

  return (
    <Table
      dataSource={props.pendingState}
      columns={column}
      loading={!props.pendingState}
    />
  );
};

export default PendingProductTable;
