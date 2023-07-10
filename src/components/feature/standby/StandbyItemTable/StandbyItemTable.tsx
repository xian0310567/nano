import React from "react";

import { Table } from "antd";

import useStandbyItems from "@/hooks/feature/standby/useStandbyItems";
import getStandbyTableColumn from "@/hooks/statics/useStandbyTableColumn";

const StandbyItemTable = () => {
  const { dataSource } = useStandbyItems();
  const { columns } = getStandbyTableColumn();

  return (
    <>
      {dataSource && (
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 500 }}
          key="id"
        />
      )}
    </>
  );
};

export default StandbyItemTable;
