import { Pending } from "@/pages/api/pending-product/services/getPendingProducts";

export type PendingProductTableProps = {
  pendingState: Pending[] | undefined;
};
