import { Menu } from "@/pages/api/menu";

export type GetMenusCallback = {
  menu: Menu[];
  getMenus: () => void;
};
