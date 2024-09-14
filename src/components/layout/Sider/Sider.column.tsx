import type { MenuProps } from "antd";

import Link from "next/link";

import { Menu } from "@/pages/api/menu";

const useGetMenuList = (menu: Menu[]) => {
  if (!menu.length) return [];

  const navMenu: MenuProps["items"] = menu.map((menu) => {
    return {
      key: menu.key,
      label: menu.link ? (
        <Link href={menu.link}>{menu.label}</Link>
      ) : (
        menu.label
      ),
      children:
        menu.children &&
        menu.children.map((children) => {
          return {
            ...children,
            label: children.link ? (
              <Link href={children.link}>{children.label}</Link>
            ) : (
              children.label
            ),
          };
        }),
    };
  });

  return navMenu;
};

export default useGetMenuList;
