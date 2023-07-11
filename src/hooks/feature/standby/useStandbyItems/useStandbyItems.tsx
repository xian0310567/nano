import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";

import { defaultUserState } from "@/hooks/store";

import { GetItemsCallback } from "./lib/useGetStandbyItems.interface";
import { Standby } from "@prisma/client";
import { DefaultUser } from "@/hooks/store";

const useStandbyItems = (defaultUser?: DefaultUser): GetItemsCallback => {
  const [dataSource, setDataSource] = React.useState<Standby[] | undefined>();

  const findUser = defaultUser ? `?user=${defaultUser.key}` : "";

  React.useEffect(() => {
    axios.get<Standby[]>(`/api/standby${findUser}`).then((res) => {
      setDataSource(res.data);
    });
  }, [defaultUser]);

  return { dataSource };
};

export default useStandbyItems;
