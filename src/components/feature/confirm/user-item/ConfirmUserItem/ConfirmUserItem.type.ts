import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";
import { ConfirmItem } from "@/hooks/feature/confirm/user-item/usePatchConfirmItem";

export type ConfirmUserItemProps = {
  record: Standby;
  patchConfirmItem: (confirmItem: ConfirmItem) => void;
};
