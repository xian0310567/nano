import {
  Standby,
  GetItemsCallback,
} from "@/hooks/feature/user-items/standby/useGetStandbyItems";

export type DeleteModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  record: Standby;
  getStandbyItems: GetItemsCallback["getStandbyItems"];
};
