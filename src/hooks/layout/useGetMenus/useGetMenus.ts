import { useState } from "react";
import axios from "axios";

import { Menu } from "@/pages/api/menu";
import { GetMenusCallback } from "./useGetMenus.type";

const useGetMenus = (): GetMenusCallback => {
  const [menu, setMenu] = useState<Menu[]>([]);

  const getMenus = async () => {
    const res = await axios.get<Menu[]>("/api/menu");

    if (res) setMenu(res.data);
  };

  return { menu, getMenus };
};

export default useGetMenus;
