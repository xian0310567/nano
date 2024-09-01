import {
  Standby,
  GetItemsCallback,
} from "@/hooks/feature/standby/useGetStandbyItems";

export type DeleteModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  record: Standby;
  getStandbyItems: GetItemsCallback["getStandbyItems"];
};
