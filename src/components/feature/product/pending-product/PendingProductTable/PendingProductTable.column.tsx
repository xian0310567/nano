import UploadProductButton from "@/components/feature/product/pending-product/UploadProductButton";

import { Pending } from "@/pages/api/pending-product/services/getPendingProducts";
import type { ColumnsType } from "antd/es/table";

const ItemTableColumn = () => {
  const columns: ColumnsType<Pending> = [
    {
      title: "업로드 단가",
      key: "upload_price",
      dataIndex: "upload_price",
      width: 120,
    },
    {
      title: "이름",
      key: "name",
      dataIndex: "name",
      fixed: "left",
    },
    {
      title: "추천 상품가",
      key: "recommend_price",
      dataIndex: "recommend_price",
      width: 100,
    },
    {
      title: "",
      key: "",
      dataIndex: "recommend_price",
      width: 50,
      render: (_, record) => <UploadProductButton record={record} />,
    },
  ];

  return columns;
};

export default ItemTableColumn;
