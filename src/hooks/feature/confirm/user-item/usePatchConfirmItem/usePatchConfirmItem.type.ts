import { StandbyState } from "@/hooks/feature/user-items/standby/useGetStandbyItems";

export type PatchConfirmItemCallback = {
  patchConfirmItem: (confirmItem: ConfirmItem) => void;
};

export type ConfirmItem = {
  id: number;
  state: StandbyState;
  uploadPrice: number;
  description: string;
};
