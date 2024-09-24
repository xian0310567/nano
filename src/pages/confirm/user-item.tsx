import UserItemTable from "@/components/feature/confirm/user-item/UserItemTable";

import useGetUserUploadItems from "@/hooks/feature/confirm/user-item/useGetUserUploadItems";
import usePatchConfirmItem from "@/hooks/feature/confirm/user-item/usePatchConfirmItem";

const userItem = () => {
  const { standby } = useGetUserUploadItems();
  const { patchConfirmItem } = usePatchConfirmItem();

  return (
    <>
      <UserItemTable standby={standby} patchConfirmItem={patchConfirmItem} />
    </>
  );
};

export default userItem;
