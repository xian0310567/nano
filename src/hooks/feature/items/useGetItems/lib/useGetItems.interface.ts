import type { ColumnsType } from "antd/es/table";

export type GetItemsCallback = {
  dataSource: ItemDataSource[];
  columns: ColumnsType<ItemDataSource>;
};

export type ItemDataSource = {
  key: number;
  name: string;
  link: string;
  setPrice: number;
  description: string;
};
