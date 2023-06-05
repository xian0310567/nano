import React from "react";

import { Table } from "antd";

import useGetStandbyItems from "@/hooks/feature/standby/useGetStandbyItems";
import getStandbyTableColumn from "@/hooks/statics/useGetStandbyTableColumn";

const StandbyItemTable = () => {
  const { dataSource, getStandbyItems } = useGetStandbyItems();
  const { columns } = getStandbyTableColumn();

  React.useEffect(() => {
    getStandbyItems();
  }, []);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{ x: 500 }}
      // expandable={{
      //   expandedRowRender: (record) => (
      //     <a style={{ margin: 0 }} href={record.url} target="_blank">
      //       {record.url}
      //     </a>
      //   ),
      // }}
    />
  );
};

export default StandbyItemTable;
