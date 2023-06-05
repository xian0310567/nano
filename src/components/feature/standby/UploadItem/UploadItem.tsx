import React from "react";

import { Modal, Input } from "antd";

import useAddStandby from "@/hooks/feature/standby/useAddStandby";

const UploadItem = ({
  onOpen,
  setOpen,
}: {
  onOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [url, setUrl] = React.useState<string>("");
  const { standby, addStandby } = useAddStandby();

  return (
    <Modal
      open={onOpen}
      onOk={() => {
        addStandby(url);
      }}
      onCancel={() => {
        setOpen(false);
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
