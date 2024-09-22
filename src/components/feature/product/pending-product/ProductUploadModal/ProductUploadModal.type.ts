import { Product } from "@/pages/api/pending-product/services/getPendingProducts";
import { UploadFile } from "antd/es/upload/interface";

export type ProductUploadModalProps = {
  record: Product;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ProductForm = {
  price: number;
  upload: UploadFile[];
};
