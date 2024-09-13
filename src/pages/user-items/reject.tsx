import { useEffect } from "react";

import RejectItemTable from "@/components/feature/user-items/reject/RejectItemTable";

import useGetRejectItems from "@/hooks/feature/user-items/reject/useGetRejectItems";

const reject = () => {
  const rejectItems = useGetRejectItems();

  useEffect(() => {
    rejectItems.getCompleteItems();
  }, []);

  return <RejectItemTable rejectItems={rejectItems.dataSource} />;
};

export default reject;
