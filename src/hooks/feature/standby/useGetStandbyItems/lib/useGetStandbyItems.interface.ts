import { Standby } from "@prisma/client";

export type GetItemsCallback = {
  dataSource: Standby[] | undefined;
  getStandbyItems: () => void;
};
