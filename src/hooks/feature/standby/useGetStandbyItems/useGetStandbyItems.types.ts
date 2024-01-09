export type Standby = {
  id: number;
  url: string;
  created_at: Date;
  state: StandbyState;
};

export type StandbyState = "reject" | "upload" | "complete";

export type GetItemsCallback = {
  dataSource: Standby[] | undefined;
  getStandbyItems: () => void;
};
