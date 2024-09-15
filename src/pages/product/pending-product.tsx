import { useEffect } from "react";

import PendingProductTable from "@/components/feature/product/pending-product/PendingProductTable";

import useGetPendingProduct from "@/hooks/feature/pending-product/useGetPendingProduct";

const pendingProduct = () => {
  const pending = useGetPendingProduct();

  useEffect(() => {
    pending.getPendingProduct();
  }, []);

  return <PendingProductTable pendingState={pending.pendingProduct} />;
};

export default pendingProduct;
