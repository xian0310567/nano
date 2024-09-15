import { Pending } from "@/pages/api/pending-product/services/getPendingProducts";
import type { ColumnsType } from "antd/es/table";

const ItemTableColumn = () => {
  const columns: ColumnsType<Pending> = [
    {
      title: "",
      key: "id",
      dataIndex: "id",
      width: 50,
    },
    {
      title: "이름",
      key: "name",
      dataIndex: "name",
      fixed: "left",
    },
    {
      title: "가격",
      key: "price",
      dataIndex: "price",
      width: 100,
    },
  ];

  return columns;
};

export default ItemTableColumn;