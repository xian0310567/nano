import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";

import { defaultUserState } from "@/hooks/store";

import { Standby } from "@prisma/client";

const useUploadStandby = () => {
  const [userState] = useRecoilState(defaultUserState);
  const [standby, setStandby] = React.useState<Standby | undefined>(undefined);

  const addStandby = (url: string) => {
    axios
      .post<Standby>("/api/standby", {
        url: url,
        userId: userState.key,
      })
      .then((res) => {
        setStandby(res.data);
      });
  };

  return { standby, addStandby };
};

export default useUploadStandby;
