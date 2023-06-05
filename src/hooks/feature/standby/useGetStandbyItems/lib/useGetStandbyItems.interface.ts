import type { ColumnsType } from "antd/es/table";

export type GetItemsCallback = {
  dataSource: StandbyItemDataSource[] | undefined;
  getStandbyItems: () => void;
};

export type StandbyItemDataSource = {
  id: number;
  url: string;
  uploadDate: Date;
  // state: "upload" | "reject" | "complete";
  // description: string;
};
