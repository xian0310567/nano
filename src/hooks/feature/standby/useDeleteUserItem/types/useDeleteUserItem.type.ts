import { Standby } from "@/hooks/feature/standby/useGetStandbyItems";
import { PostgrestError } from "@supabase/supabase-js";

export type DeleteUserItemCallback = {
  deleteUserItem: (record: Standby) => Promise<{
    data: Standby | null;
    error: PostgrestError | null;
  }>;
};
