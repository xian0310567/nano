import { supabase } from "@/hooks/data";

import { Standby } from "@/hooks/feature/standby/useGetStandbyItems";

const useDeleteUserItem = () => {
  const deleteUserItem = async (record: Standby) => {
    const { data, error } = await supabase
      .from("standby")
      .delete()
      .eq("id", record.id);

    if (data) {
      console.log("삭제");
    }

    return { data, error };
  };

  return { deleteUserItem };
};

export default useDeleteUserItem;
