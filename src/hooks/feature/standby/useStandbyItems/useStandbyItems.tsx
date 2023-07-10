import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";

import { defaultUserState } from "@/hooks/store";

import { GetItemsCallback } from "./lib/useGetStandbyItems.interface";
import { Standby } from "@prisma/client";

const useStandbyItems = (): GetItemsCallback => {
  const [defaultUser] = useRecoilState(defaultUserState);
  const [dataSource, setDataSource] = React.useState<Standby[] | undefined>();

  React.useEffect(() => {
    axios.get<Standby[]>(`/api/standby?user=${defaultUser.key}`).then((res) => {
      setDataSource(res.data);
    });
  }, [defaultUser]);

  return { dataSource };
};

export default useStandbyItems;
