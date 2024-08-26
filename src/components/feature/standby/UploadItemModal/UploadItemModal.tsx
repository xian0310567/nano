import React from "react";

import { Modal, Input } from "antd";

import useAddStandby from "@/hooks/feature/standby/useAddStandby";

import { UploadItemModalProps } from "./UploadItemModal.type";

const UploadItem = (props: UploadItemModalProps) => {
  const [url, setUrl] = React.useState<string>("");

  const { addStandby } = useAddStandby();

  return (
    <Modal
      closeIcon
      open={props.onOpen}
      onOk={() => {
        addStandby(url);
      }}
      onCancel={() => {
        props.setOpen(false);
      }}
    >
      <Input
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
    </Modal>
  );
};

export default UploadItem;
