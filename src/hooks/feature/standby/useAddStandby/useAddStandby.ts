import { useState } from "react";

import { supabase } from "@/hooks/data";
import useRetrieveSession from "@/hooks/feature/auth/useRetrieveSession";

import { Standby } from "@/hooks/feature/standby/useGetStandbyItems";
import { AddStandByCallback } from "./useAddStandby.type";

const useAddStandby = (): AddStandByCallback => {
  const [standby, setStandby] = useState<Standby | undefined>();
  const { retrieveSession } = useRetrieveSession();

  const addStandby = async (url: string) => {
    const session = await retrieveSession();

    const { data } = await supabase
      .from("standby")
      .insert({ url, state: "upload", user_aid: session.data.session?.user.id })
      .select()
      .returns<Standby>();

    if (data) setStandby(data);
  };

  return { standby, addStandby };
};

export default useAddStandby;
