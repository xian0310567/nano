import React from "react";

import { Modal, Input } from "antd";

import useAddStandby from "@/hooks/feature/standby/useAddStandby";

import { UploadItemProps } from "./UploadItem.type";

const UploadItem = (props: UploadItemProps) => {
  const [url, setUrl] = React.useState<string>("");
  const { standby, addStandby } = useAddStandby();

  return (
    <Modal
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
