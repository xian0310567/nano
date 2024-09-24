import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";
import { ConfirmItem } from "@/hooks/feature/confirm/user-item/usePatchConfirmItem";

export type ConfirmModalProps = {
  record: Standby;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  patchConfirmItem: (confirmItem: ConfirmItem) => void;
};
