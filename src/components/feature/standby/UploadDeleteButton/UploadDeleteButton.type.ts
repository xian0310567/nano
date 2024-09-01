import {
  Standby,
  GetItemsCallback,
} from "@/hooks/feature/standby/useGetStandbyItems";

export type UploadDeleteButtonProps = {
  record: Standby;
  getStandbyItems: GetItemsCallback["getStandbyItems"];
};
