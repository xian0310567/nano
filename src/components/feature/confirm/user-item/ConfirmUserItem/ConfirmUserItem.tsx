import { useState } from "react";

import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ConfirmModal from "@/components/feature/confirm/user-item/ConfirmModal";

import { ConfirmUserItemProps } from "./ConfirmUserItem.type";

const ConfirmUserItem = (props: ConfirmUserItemProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button type="text" onClick={() => setModalOpen(true)}>
        <UploadOutlined />
      </Button>
      <ConfirmModal
        record={props.record}
        open={modalOpen}
        setOpen={setModalOpen}
        patchConfirmItem={props.patchConfirmItem}
      />
    </>
  );
};

export default ConfirmUserItem;
