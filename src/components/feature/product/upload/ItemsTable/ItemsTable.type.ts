import { Product } from "@/pages/api/pending-product/services/getPendingProducts";

export type ItemsTableProps = {
  products: Product[] | undefined;
};
