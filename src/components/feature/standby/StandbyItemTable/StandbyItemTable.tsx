import React from "react";

import { Table } from "antd";

import useGetStandbyItems from "@/hooks/feature/standby/useGetStandbyItems";
import column from "./lib/column";

const StandbyItemTable = () => {
  const { dataSource, getStandbyItems } = useGetStandbyItems();
  const { columns } = column();

  React.useEffect(() => {
    getStandbyItems();
  }, []);

  return (
    <Table dataSource={dataSource} columns={columns} scroll={{ x: 300 }} />
  );
};

export default StandbyItemTable;
