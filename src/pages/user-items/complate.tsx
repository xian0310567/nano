import { useEffect } from "react";

import CompleteItemTable from "@/components/feature/user-items/complete/CompleteItemTable";

import useGetCompleteItems from "@/hooks/feature/user-items/complete/useGetCompleteItems";

const Complate = () => {
  const completeItems = useGetCompleteItems();

  useEffect(() => {
    completeItems.getCompleteItems();
  }, []);

  return (
    <div>
      <CompleteItemTable completeState={completeItems.dataSource} />
    </div>
  );
};

export default Complate;
