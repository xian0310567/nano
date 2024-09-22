import { Product } from "@/pages/api/pending-product/services/getPendingProducts";
import { UploadFile } from "antd/es/upload/interface";

export type UploadProductDetailPageImageCallback = {
  uploadProductDetailPageImage: (
    record: Product,
    image: UploadFile
  ) => Promise<boolean>;
};
