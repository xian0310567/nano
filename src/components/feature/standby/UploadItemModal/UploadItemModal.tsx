import React from "react";

import { Modal, Input } from "antd";

import { UploadItemModalProps } from "./UploadItemModal.type";

const UploadItem = (props: UploadItemModalProps) => {
  const [url, setUrl] = React.useState<string>("");

  const { standby, addStandby } = props.addStandBy;

  return (
    <Modal
      closeIcon
      open={props.onOpen}
      onOk={() => {
        addStandby(url);
        props.setOpen(false);
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
