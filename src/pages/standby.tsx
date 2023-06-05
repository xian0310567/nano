import React from "react";

import { Button } from "antd";

import UploadItemModal from "@/components/feature/standby/UploadItem";
import ItemsTable from "@/components/feature/standby/StandbyItemTable";

const standby = () => {
  const [uploadModal, setUploadModal] = React.useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => {
          setUploadModal(true);
        }}
      >
        as
      </Button>
      <ItemsTable />
      <UploadItemModal onOpen={uploadModal} setOpen={setUploadModal} />
    </>
  );
};

export default standby;
