import { Product } from "@/pages/api/pending-product/services/getPendingProducts";

export type PendingProductTableProps = {
  pendingState: Product[] | undefined;
};
