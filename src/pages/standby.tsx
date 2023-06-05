import React from "react";

import { Space, Button } from "antd";

import UploadItemModal from "@/components/feature/standby/UploadItem";
import ItemsTable from "@/components/feature/standby/StandbyItemTable";

import styled from "@/styles/standby.module.css";

const standby = () => {
  const [uploadModal, setUploadModal] = React.useState<boolean>(false);

  return (
    <>
      <div className={styled.uploadBoard}>
        <Button
          className={styled.uploadButton}
          type="primary"
          onClick={() => {
            setUploadModal(true);
          }}
        >
          상품 업로드
        </Button>
      </div>
      <ItemsTable />
      <UploadItemModal onOpen={uploadModal} setOpen={setUploadModal} />
    </>
  );
};

export default standby;
