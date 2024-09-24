import { Table } from "antd";

import column from "./UserItemTable.column";

import { UserItemTableProps } from "./UserItemTable.type";

const UserItemTable = (props: UserItemTableProps) => {
  return (
    <Table
      columns={column(props.patchConfirmItem)}
      dataSource={props.standby}
      loading={!props.standby}
    />
  );
};

export default UserItemTable;
