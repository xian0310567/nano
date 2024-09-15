import { useState } from "react";
import axios from "axios";

import { Pending } from "@/pages/api/pending-product/services/getPendingProducts";
import { GetPendingProductCallback } from "./useGetPendingProduct.type";

const useGetPendingProduct = (): GetPendingProductCallback => {
  const [pendingProduct, setPendingProduct] = useState<Pending[]>();

  const getPendingProduct = async () => {
    const res = await axios.get<Pending[]>("/api/pending-product");

    if (res) setPendingProduct(res.data);
  };

  return { pendingProduct, getPendingProduct };
};

export default useGetPendingProduct;
