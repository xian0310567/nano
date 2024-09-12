import { Table } from "antd";

import completeITemTableColumn from "./CompleteItemTable.column";

import { CompleteItemTableProps } from "./ComplateItemTable.type";

const CompleteItemTable = (props: CompleteItemTableProps) => {
  const { columns } = completeITemTableColumn();

  return (
    <Table
      loading={!props.completeState}
      dataSource={props.completeState}
      columns={columns}
    />
  );
};

export default CompleteItemTable;
