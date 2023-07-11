import type { MenuProps } from "antd";

import Link from "next/link";

const useMenuList = () => {
  const navMenu: MenuProps["items"] = [
    {
      key: 1,
      label: <Link href="/items">상품 목록</Link>,
    },
    {
      key: 2,
      label: <Link href="/standby">상품 대기</Link>,
    },
    {
      key: 3,
      label: <Link href="">소싱 검수</Link>,
    },
  ];

  return { navMenu };
};

export default useMenuList;
