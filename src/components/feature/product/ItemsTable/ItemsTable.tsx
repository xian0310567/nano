import React from "react";
import { Table } from "antd";

import getItems from "@/hooks/feature/items/useGetItems";

const ItemsTable = () => {
  const { dataSource, columns } = getItems();

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{ x: 3000 }}
      expandable={{
        expandedRowRender: (record) => (
          <a style={{ margin: 0 }} href={record.link} target="_blank">
            {record.link}
          </a>
        ),
      }}
    />
  );
};

export default ItemsTable;
