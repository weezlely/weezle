import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import "@/app/locales/i18";
import { menuList, menuListResponse } from "@/assets";
import { routerConfig, styleConfig } from "@/app/configs";
import { useUserStore } from "@/state";

styleConfig();

export const App = () => {
  const userStores = useUserStore();

  useEffect(() => {
    if (!userStores) return;
    userStores.setMenuList(menuList.table.list);

    userStores.setMenuListResponse(menuListResponse);
  }, []);

  return <RouterProvider router={routerConfig} />;
};
