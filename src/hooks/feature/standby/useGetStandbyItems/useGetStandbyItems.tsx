import React from "react";
import axios from "axios";

import { GetItemsCallback } from "./lib/useGetStandbyItems.interface";
import { Standby } from "@prisma/client";

const useGetStandbyItems = (): GetItemsCallback => {
  const [dataSource, setDataSource] = React.useState<Standby[]>();

  const getStandbyItems = () => {
    axios.get<Standby[]>(`/api/standby?user=${1}`).then((res) => {
      setDataSource(res.data);
    });
  };

  return { dataSource, getStandbyItems };
};

export default useGetStandbyItems;
