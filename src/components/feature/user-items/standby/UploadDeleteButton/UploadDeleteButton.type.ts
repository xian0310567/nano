import {
  Standby,
  GetItemsCallback,
} from "@/hooks/feature/user-items/standby/useGetStandbyItems";

export type UploadDeleteButtonProps = {
  record: Standby;
  getStandbyItems: GetItemsCallback["getStandbyItems"];
};
