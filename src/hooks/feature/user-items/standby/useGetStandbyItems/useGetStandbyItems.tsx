import React from "react";
import axios from "axios";

import useRetrieveSession from "@/hooks/feature/auth/useRetrieveSession";

import {
  Standby,
  GetItemsCallback,
  StandbyState,
} from "./useGetStandbyItems.types";

const useGetStandbyItems = (): GetItemsCallback => {
  const { retrieveSession } = useRetrieveSession();
  const [dataSource, setDataSource] = React.useState<Standby[]>();

  const getStandbyItems = async (state: StandbyState) => {
    const session = await retrieveSession();

    const res = await axios.get<Standby[]>("/api/standby");

    if (res.data) {
      setDataSource(res.data);
    }
  };

  return { dataSource, getStandbyItems };
};

export default useGetStandbyItems;
