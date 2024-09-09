import { Modal, Typography } from "antd";

import useDeleteUserItem from "@/hooks/feature/standby/useDeleteUserItem";

import { DeleteModalProps } from "./DeleteModal.type";

const DeleteModal = (props: DeleteModalProps) => {
  const { deleteUserItem } = useDeleteUserItem();

  const { Text } = Typography;

  const deleteHandler = async () => {
    await deleteUserItem(props.record);
    props.getStandbyItems("upload");
    props.setOpen(false);
  };

  return (
    <Modal
      open={props.open}
      onOk={deleteHandler}
      onCancel={() => props.setOpen(false)}
      closeIcon
      title={`${props.record.id}번을 항목 삭제하시겠습니까?`}
    >
      <Text>삭제한 항목은 복원되지 않습니다.</Text>
    </Modal>
  );
};

export default DeleteModal;
