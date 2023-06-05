import React from "react";
import axios from "axios";

import { Standby } from "@prisma/client";

const useAddStandby = () => {
  const [standby, setStandby] = React.useState<Standby | undefined>(undefined);

  const addStandby = (url: string) => {
    axios
      .post<Standby>("/api/standby", {
        url: url,
        userId: 1,
      })
      .then((res) => {
        setStandby(res.data);
      });
  };

  return { standby, addStandby };
};

export default useAddStandby;
