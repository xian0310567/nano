import React from "react";
import { supabase } from "@/hooks/data";

import { Standby, GetItemsCallback } from "./useGetStandbyItems.types";

const useGetStandbyItems = (): GetItemsCallback => {
  const [dataSource, setDataSource] = React.useState<Standby[]>();

  const getStandbyItems = async () => {
    const { data, error } = await supabase
      .from("standby")
      .select("*")
      .returns<Standby[]>();

    if (data) {
      setDataSource(data);
    }
  };

  return { dataSource, getStandbyItems };
};

export default useGetStandbyItems;
