import { Product } from "@/pages/api/pending-product/services/getPendingProducts";

export type GetItemsCallback = {
  getProducts: () => void;
  product: Product[] | undefined;
};
