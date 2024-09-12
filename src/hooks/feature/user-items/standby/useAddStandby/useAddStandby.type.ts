import { Standby } from "@/hooks/feature/user-items/standby/useGetStandbyItems";

export type AddStandByCallback = {
  standby: Standby | undefined;
  addStandby: (url: string) => Promise<void>;
};
