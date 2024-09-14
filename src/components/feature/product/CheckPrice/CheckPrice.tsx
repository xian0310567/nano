import React from "react";

import { Button } from "antd";

import useGetCrawlPrice from "@/hooks/common/useGetCrawlPrice";

const CheckPrice = ({ url }: { url: string }) => {
  const { price, getCrawlPrice } = useGetCrawlPrice();

  return (
    <Button
      disabled={price ? true : false}
      onClick={() => {
        getCrawlPrice(url);
      }}
    >
      {price}
    </Button>
  );
};

export default CheckPrice;
