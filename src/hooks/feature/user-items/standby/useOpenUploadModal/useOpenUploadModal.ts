import React from "react";

const useOpenUploadModal = () => {
  const [uploadModal, setUploadModal] = React.useState<boolean>(false);

  return { uploadModal, setUploadModal };
};

export default useOpenUploadModal;
