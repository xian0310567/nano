import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";

export type GetRejectItemCallback = {
  dataSource: Standby[] | undefined;
  getCompleteItems: () => Promise<void>;
};
