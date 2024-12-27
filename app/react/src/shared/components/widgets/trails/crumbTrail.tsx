import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import type { MenuList } from "@/types";
import { Breadcrumb } from "@/shared/components";
import { useUserStore } from "@/state";

export const CrumbTrail = () => {
  const pathname = useLocation().pathname;
  const userStores = useUserStore();

  const targetMenu = useMemo(() => {
    if (!userStores.currentMenuList) return null;

    const findMenuByHref = (menuList: MenuList[]) => {
      for (const menu of menuList) {
        if (menu.href === pathname) {
          return menu;
        }
        if (menu.children) {
          return findMenuByHref(menu.children);
        }
      }
      return null;
    };

    return findMenuByHref(userStores.menuListResponse?.data!);
  }, [userStores.currentMenuList, pathname]);

  const crumbItem = useMemo(() => {
    if (!targetMenu || targetMenu.depth === "1") return;

    let tempMenu = targetMenu;
    const list = [];

    while (tempMenu.depth !== "1") {
      tempMenu = userStores.menuListResponse?.data.find((data) => data.menuId === tempMenu.upMenuId)!;
      if (!tempMenu) break;
      list.unshift({ title: tempMenu.display, href: tempMenu.href });
    }

    list.push({ title: targetMenu.display, href: targetMenu.href });

    return list;
  }, [targetMenu, userStores.menuListResponse?.data]);

  return <Breadcrumb items={crumbItem!} />;
};
