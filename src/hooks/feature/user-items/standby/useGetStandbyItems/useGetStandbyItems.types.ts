export type Standby = {
  id: number;
  url: string;
  created_at: Date;
  user_aid: string;
  upload_price: number;
  state: StandbyState;
  description: string;
};

export type StandbyState = "reject" | "upload" | "complete";

export type GetItemsCallback = {
  dataSource: Standby[] | undefined;
  getStandbyItems: (state: StandbyState) => void;
};
