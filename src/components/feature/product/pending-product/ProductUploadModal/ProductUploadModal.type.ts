import { Pending } from "@/pages/api/pending-product/services/getPendingProducts";

export type ProductUploadModalProps = {
  record: Pending;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
