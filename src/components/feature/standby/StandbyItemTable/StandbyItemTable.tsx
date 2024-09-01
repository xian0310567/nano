import React from "react";

import { Table } from "antd";

import column from "./lib/column";

import { StandbyItemTableProps } from "./StandbyItemTable.type";

const StandbyItemTable = (props: StandbyItemTableProps) => {
  const { dataSource, getStandbyItems } = props.getStandby;
  const { columns } = column({ getStandbyItems });

  return (
    <Table dataSource={dataSource} columns={columns} scroll={{ x: 300 }} />
  );
};

export default StandbyItemTable;
