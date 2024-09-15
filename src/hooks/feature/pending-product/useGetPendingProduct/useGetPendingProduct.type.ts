import { Pending } from "@/pages/api/pending-product/services/getPendingProducts";

export type GetPendingProductCallback = {
  pendingProduct: Pending[] | undefined;
  getPendingProduct: () => void;
};
