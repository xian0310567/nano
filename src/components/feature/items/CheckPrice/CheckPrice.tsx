import React from "react";
import axios from "axios";

import { Button } from "antd";

const CheckPrice = ({ url }: { url: string }) => {
  const [open, setOpen] = React.useState<number>();

  return (
    <Button
      disabled={open ? true : false}
      onClick={() => {
        axios.get(`/api/crawl?url=${url}`).then((res) => {
          setOpen(res.data.price);
        });
      }}
    >
      {open}
    </Button>
  );
};

export default CheckPrice;
