import { useState } from "react";

import { supabase } from "@/hooks/data";
import { Standby } from "@/hooks/feature/standby/useGetStandbyItems";

const useAddStandby = () => {
  const [standby, setStandby] = useState<Standby | undefined>();

  const addStandby = async (url: string) => {
    const { data } = await supabase
      .from("standby")
      .insert({ url, state: "upload" })
      .select()
      .returns<Standby>();

    if (data) setStandby(data);
  };
  return { addStandby };
};

export default useAddStandby;
