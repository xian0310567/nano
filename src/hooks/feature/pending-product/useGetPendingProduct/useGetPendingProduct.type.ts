import { Product } from "@/pages/api/pending-product/services/getPendingProducts";

export type GetPendingProductCallback = {
  pendingProduct: Product[] | undefined;
  getPendingProduct: () => void;
};
