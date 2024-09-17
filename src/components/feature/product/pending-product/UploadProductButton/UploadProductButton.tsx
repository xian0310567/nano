import { useState } from "react";

import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ProductUploadModal from "@/components/feature/product/pending-product/ProductUploadModal";

import { UploadProductButtonProps } from "./UploadProductButton.type";

const UploadProductButton = (props: UploadProductButtonProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button type="text" onClick={() => setModalOpen(true)}>
        <UploadOutlined />
      </Button>
      <ProductUploadModal
        record={props.record}
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </>
  );
};

export default UploadProductButton;
