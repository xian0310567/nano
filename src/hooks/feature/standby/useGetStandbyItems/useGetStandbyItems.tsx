import React from "react";
import { supabase } from "@/hooks/data";

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

    const { data, error } = await supabase
      .from("standby")
      .select("*")
      .eq("state", state)
      .eq("user_aid", session.data.session?.user.id)
      .returns<Standby[]>();

    if (data) {
      setDataSource(data);
    }
  };

  return { dataSource, getStandbyItems };
};

export default useGetStandbyItems;
