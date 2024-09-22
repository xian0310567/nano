import { Product } from "@/pages/api/pending-product/services/getPendingProducts";

export type UploadProductCallback = {
  uploadProduct: (record: Product) => void;
};
