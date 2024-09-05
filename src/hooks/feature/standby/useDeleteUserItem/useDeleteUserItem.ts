import axios from "axios";

import { Standby } from "@/hooks/feature/standby/useGetStandbyItems";

const useDeleteUserItem = () => {
  const deleteUserItem = async (record: Standby) => {
    const res = await axios.delete("/api/standby", {
      params: {
        record: record.id,
      },
    });

    if (res.data) {
      console.log("삭제");
    }
  };

  return { deleteUserItem };
};

export default useDeleteUserItem;
