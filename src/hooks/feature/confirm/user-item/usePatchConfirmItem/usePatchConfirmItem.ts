import axios from "axios";
import { mutate } from "swr";

import {
  ConfirmItem,
  PatchConfirmItemCallback,
} from "./usePatchConfirmItem.type";

const usePatchConfirmItem = (): PatchConfirmItemCallback => {
  const patchConfirmItem = async (confirmItem: ConfirmItem) => {
    const res = await axios.patch("/api/user-item", confirmItem);

    if (res.data) {
      mutate("/api/user-item/standby");
    }
  };

  return { patchConfirmItem };
};

export default usePatchConfirmItem;
