import axios from "axios";
import { message } from "antd";

import { Standby } from "@/hooks/feature/standby/useGetStandbyItems";

const useDeleteUserItem = () => {
  const deleteUserItem = async (record: Standby) => {
    const res = await axios.delete("/api/standby", {
      params: {
        record: record.id,
      },
    });

    if (res.data) {
      message.success(`${record.id}번 항목이 삭제되었습니다.`);
    }
  };

  return { deleteUserItem };
};

export default useDeleteUserItem;
