import useSWR from "swr";

import { GetUserUploadItemsCallback } from "./useGetUserUploadItem.type";
import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";

const useGetUserUploadItems = (): GetUserUploadItemsCallback => {
  const { data, error } = useSWR<Standby[]>("/api/user-item/standby");

  return { standby: data };
};

export default useGetUserUploadItems;
