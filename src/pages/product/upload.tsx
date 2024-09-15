import { useEffect } from "react";

import ItemsTable from "@/components/feature/product/upload/ItemsTable";
import useGetProduct from "@/hooks/feature/product/useGetProducts";

const items = () => {
  const product = useGetProduct();

  useEffect(() => {
    product.getProducts();
  }, []);

  return (
    <>
      <ItemsTable products={product.product} />
    </>
  );
};

export default items;
