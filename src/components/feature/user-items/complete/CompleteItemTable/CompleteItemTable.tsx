import { Table } from "antd";

import completeITemTableColumn from "./CompleteItemTable.column";

const CompleteItemTable = () => {
  const { columns } = completeITemTableColumn();

  return <Table dataSource={[]} columns={columns} />;
};

export default CompleteItemTable;
