import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";

export type GetCompleteItemsCallback = {
  dataSource: Standby[] | undefined;
  getCompleteItems: () => Promise<void>;
};
