import type { MenuProps } from "antd";

const useGetMenuList = () => {
  const navMenu: MenuProps["items"] = [
    {
      key: 1,
      label: "아이템",
    },
  ];

  return { navMenu };
};

export default useGetMenuList;
