import { useState } from "react";
import axios from "axios";

import { Product } from "@/pages/api/pending-product/services/getPendingProducts";
import { GetItemsCallback } from "./lib/useGetItems.interface";

const useGetItems = (): GetItemsCallback => {
  const [product, setProduct] = useState<Product[]>();

  const getProducts = async () => {
    const res = await axios.get<Product[]>("/api/product", {
      params: {
        name: "",
      },
    });

    if (res) setProduct(res.data);
  };

  return { getProducts, product };
};

export default useGetItems;
