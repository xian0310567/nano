import React from "react";
import type { ColumnsType } from "antd/es/table";

import CheckPrice from "@/components/feature/items/CheckPrice";

import { GetItemsCallback, ItemDataSource } from "./lib/useGetItems.interface";

const useGetItems = (): GetItemsCallback => {
  const dataSource: ItemDataSource[] = [
    {
      key: 1,
      name: "세라믹 촛대 상식 홀더 촛불 고정 북유럽 캔들 인테리어 양초 향초",
      link: "https://ko.aliexpress.com/item/1005004634643284.html?spm=a2g0o.home.15002.22.672a4430dZJO9z&gps-id=pcJustForYou&scm=1007.13562.295723.0&scm_id=1007.13562.295723.0&scm-url=1007.13562.295723.0&pvid=666d84e5-e619-44c3-845c-fc98a04d8e7c&_t=gps-id:pcJustForYouscm-url:1007.13562.295723.0pvid:666d84e5-e619-44c3-845c-fc98a04d8e7ctpp_buckets:668%232846%238116%232002&pdp_ext_f=%7B%22sku_id%22%3A%2212000029915992568%22%2C%22sceneId%22%3A%223562%22%7D&pdp_npi=2%40dis%21KRW%2128419.0%2110730.0%21%21%21%21%21%402103222716749949987171658eb361%2112000029915992568%21rec&curPageLogUid=tCIO2bqwMSFT",
      setPrice: 5000,
      description: "",
    },
    {
      key: 2,
      name: "세라믹 촛대 상식 홀더 촛불 고정 북유럽 캔들 인테리어 양초 향초",
      link: "https://ko.aliexpress.com/item/1005004634643284.html?spm=a2g0o.home.15002.22.672a4430dZJO9z&gps-id=pcJustForYou&scm=1007.13562.295723.0&scm_id=1007.13562.295723.0&scm-url=1007.13562.295723.0&pvid=666d84e5-e619-44c3-845c-fc98a04d8e7c&_t=gps-id:pcJustForYouscm-url:1007.13562.295723.0pvid:666d84e5-e619-44c3-845c-fc98a04d8e7ctpp_buckets:668%232846%238116%232002&pdp_ext_f=%7B%22sku_id%22%3A%2212000029915992568%22%2C%22sceneId%22%3A%223562%22%7D&pdp_npi=2%40dis%21KRW%2128419.0%2110730.0%21%21%21%21%21%402103222716749949987171658eb361%2112000029915992568%21rec&curPageLogUid=tCIO2bqwMSFT",
      setPrice: 5000,
      description: "",
    },
  ];

  const columns: ColumnsType<ItemDataSource> = [
    {
      title: "no",
      key: "key",
      dataIndex: "key",
      fixed: "left",
      width: 50,
    },
    {
      title: "name",
      width: 400,
      key: "name",
      dataIndex: "name",
      fixed: "left",
    },
    {
      title: "price",
      key: "price",
      dataIndex: "setPrice",
      width: 100,
    },
    {
      title: "현재 가격",
      key: "nowPrice",
      render: (_, record) => <CheckPrice url={record.link} />,
    },
  ];

  return { dataSource, columns };
};

export default useGetItems;
