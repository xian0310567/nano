import { useState } from "react";

import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import DeleteModal from "@/components/feature/standby/DeleteModal";

import { UploadDeleteButtonProps } from "./UploadDeleteButton.type";

const UploadDeleteButton = (props: UploadDeleteButtonProps) => {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <DeleteModal
        record={props.record}
        getStandbyItems={props.getStandbyItems}
        open={deleteModal}
        setOpen={setDeleteModal}
      />
      <Button type="text" onClick={() => setDeleteModal(true)}>
        <DeleteFilled />
      </Button>
    </>
  );
};

export default UploadDeleteButton;
