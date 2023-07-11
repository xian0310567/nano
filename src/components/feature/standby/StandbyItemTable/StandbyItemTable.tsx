import React from "react";
import { useRecoilState } from "recoil";

import { Table } from "antd";

import { defaultUserState } from "@/hooks/store";
import useStandbyItems from "@/hooks/feature/standby/useStandbyItems";
import getStandbyTableColumn from "@/hooks/statics/useStandbyTableColumn";

const StandbyItemTable = () => {
  const [defaultUser] = useRecoilState(defaultUserState);
  const { dataSource } = useStandbyItems(defaultUser);
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
