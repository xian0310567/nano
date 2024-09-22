import { supabase } from "@/hooks/data";

import { UploadFile } from "antd/es/upload/interface";
import { Product } from "@/pages/api/pending-product/services/getPendingProducts";
import { UploadProductDetailPageImageCallback } from "./useUploadProductDetailPageImage.type";

const useUploadProductDetailPageImage =
  (): UploadProductDetailPageImageCallback => {
    const uploadProductDetailPageImage = async (
      record: Product,
      image: UploadFile
    ) => {
      const { data, error } = await supabase.storage
        .from("product-detail-page")
        .upload(`${record.id}/detail-page.png`, image.originFileObj as File);

      if (data) return true;

      return false;
    };

    return { uploadProductDetailPageImage };
  };

export default useUploadProductDetailPageImage;
