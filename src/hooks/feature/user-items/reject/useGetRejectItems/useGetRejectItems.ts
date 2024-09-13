import React from "react";
import axios from "axios";

import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";
import { GetRejectItemCallback } from "./useGetRejectItem.type";

const useGetRejectItems = (): GetRejectItemCallback => {
  const [dataSource, setDataSource] = React.useState<Standby[]>();

  const getCompleteItems = async () => {
    const res = await axios.get<Standby[]>("/api/user-item/reject");

    if (res.data) {
      setDataSource(res.data);
    }
  };

  return { dataSource, getCompleteItems };
};

export default useGetRejectItems;
