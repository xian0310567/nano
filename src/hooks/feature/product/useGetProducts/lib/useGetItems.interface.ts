import { Product } from "@/pages/api/product/services/getProducts";

export type GetItemsCallback = {
  getProducts: () => void;
  product: Product[] | undefined;
};
