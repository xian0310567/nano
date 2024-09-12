import React from "react";
import axios from "axios";

import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";
import { GetCompleteItemsCallback } from "./useGetCompleteItems.type";

const useGetStandbyItems = (): GetCompleteItemsCallback => {
  const [dataSource, setDataSource] = React.useState<Standby[]>();

  const getCompleteItems = async () => {
    const res = await axios.get<Standby[]>("/api/user-item/complete");

    if (res.data) {
      setDataSource(res.data);
    }
  };

  return { dataSource, getCompleteItems };
};

export default useGetStandbyItems;
