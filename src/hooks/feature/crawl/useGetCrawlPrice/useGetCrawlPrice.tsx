import React from "react";
import axios from "axios";

type Price = {
  price: number;
};

const useGetCrawlPrice = () => {
  const [price, setPrice] = React.useState<number>(0);

  const getCrawlPrice = (url: string) => {
    axios.get<Price>(`/api/crawl?url=${url}`).then((res) => {
      setPrice(res.data.price);
    });
  };

  return { price, getCrawlPrice };
};

export default useGetCrawlPrice;
