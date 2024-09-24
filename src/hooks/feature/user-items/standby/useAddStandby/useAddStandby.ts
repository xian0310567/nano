import { useState } from "react";

import axios from "axios";

import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";
import { AddStandByCallback } from "./useAddStandby.type";

const useAddStandby = (): AddStandByCallback => {
  const [standby, setStandby] = useState<Standby | undefined>();

  const addStandby = async (url: string) => {
    const res = await axios.post<Standby>("/api/user-item/standby/my", { url });

    if (res) setStandby(res.data);
  };

  return { standby, addStandby };
};

export default useAddStandby;
