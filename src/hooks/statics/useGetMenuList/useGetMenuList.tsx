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
      label: <Link href="/standby">검수 대기</Link>,
    },
  ];

  return { navMenu };
};

export default useGetMenuList;
