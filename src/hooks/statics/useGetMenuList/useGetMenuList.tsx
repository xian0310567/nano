import type { MenuProps } from "antd";

import Link from "next/link";

const useGetMenuList = () => {
  const navMenu: MenuProps["items"] = [
    {
      key: 1,
      label: <Link href="/items">상품 목록</Link>,
    },
    {
      key: 2,
      label: "소싱",
      children: [
        {
          key: 3,
          label: <Link href="/user-items/standby">검수 대기</Link>,
        },
        {
          key: 4,
          label: <Link href="/user-items/complate">검수 완료</Link>,
        },
      ],
    },
  ];

  return { navMenu };
};

export default useGetMenuList;
