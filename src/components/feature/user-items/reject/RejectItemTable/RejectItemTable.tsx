import { Table } from "antd";

import ExpandedRowRenderer from "@/components/feature/user-items/reject/ExpandedRowRenderer";

import RejectItemTableColumn from "./RejectItemTable.column";

import { RejectItemTableProps } from "./RejectItemTable.type";

const RejectItemTable = (props: RejectItemTableProps) => {
  const { columns } = RejectItemTableColumn();

  return (
    <Table
      dataSource={props.rejectItems}
      columns={columns}
      loading={!props.rejectItems}
      expandable={{
        expandedRowRender: (record) => <ExpandedRowRenderer record={record} />,
      }}
    />
  );
};

export default RejectItemTable;
