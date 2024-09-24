import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";
import { ConfirmItem } from "@/hooks/feature/confirm/user-item/usePatchConfirmItem";

export type UserItemTableProps = {
  standby: Standby[] | undefined;
  patchConfirmItem: (confirmItem: ConfirmItem) => void;
};
