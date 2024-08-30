import { Standby } from "@/hooks/feature/standby/useGetStandbyItems";

export type AddStandByCallback = {
  standby: Standby | undefined;
  addStandby: (url: string) => Promise<void>;
};
