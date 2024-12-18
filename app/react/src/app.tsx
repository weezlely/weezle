import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import "./locales/i18";
import { menuList } from "@/_db";
import { routerConfig, styleConfig } from "@/app/configs";
import { useUserStore } from "@/state";

styleConfig();

export const App = () => {
  const userStores = useUserStore();

  useEffect(() => {
    if (!userStores) return;
    userStores.setMenuList(menuList.table.list);
  }, []);

  return <RouterProvider router={routerConfig} />;
};
