import { useState } from "react";
import axios from "axios";

import { Product } from "@/pages/api/pending-product/services/getPendingProducts";
import { GetPendingProductCallback } from "./useGetPendingProduct.type";

const useGetPendingProduct = (): GetPendingProductCallback => {
  const [pendingProduct, setPendingProduct] = useState<Product[]>();

  const getPendingProduct = async () => {
    const res = await axios.get<Product[]>("/api/pending-product");

    if (res) setPendingProduct(res.data);
  };

  return { pendingProduct, getPendingProduct };
};

export default useGetPendingProduct;
