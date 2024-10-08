import { useEffect } from "react";

import { Space, Button } from "antd";

import UploadItemModal from "@/components/feature/user-items/standby/UploadItemModal";
import ItemsTable from "@/components/feature/user-items/standby/StandbyItemTable";

import openUploadModal from "@/hooks/feature/user-items/standby/useOpenUploadModal";
import useGetStandbyItems from "@/hooks/feature/user-items/standby/useGetStandbyItems";
import useAddStandby from "@/hooks/feature/user-items/standby/useAddStandby";

import styled from "@/styles/standby.module.css";

const Standby = () => {
  const addStandby = useAddStandby();
  const getStandby = useGetStandbyItems();
  const { uploadModal, setUploadModal } = openUploadModal();

  useEffect(() => {
    getStandby.getStandbyItems("upload");
  }, [addStandby.standby]);

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
      <ItemsTable getStandby={getStandby} />
      <UploadItemModal
        onOpen={uploadModal}
        setOpen={setUploadModal}
        addStandBy={addStandby}
      />
    </>
  );
};

export default Standby;
