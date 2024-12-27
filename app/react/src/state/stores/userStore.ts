import { create } from "zustand";

import type { MenuData, MenuList, MenuListResponse } from "@/types";
import { setCurrentMenuList, setMenuList, setMenuListResponse } from "@/state";

export interface UserStoreState {
  menuList: MenuData[];
  setMenuList: (menuList: MenuData[]) => void;

  menuListResponse: MenuListResponse | null;
  setMenuListResponse: (menuListResponse: MenuListResponse) => void;

  currentMenuList: MenuList[] | null;
  setCurrentMenuList: (menuList: MenuList[]) => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
  menuList: [],
  setMenuList: (menuList: MenuData[]) => setMenuList(set, menuList),

  menuListResponse: null,
  setMenuListResponse: (menuListResponse: MenuListResponse) => setMenuListResponse(set, menuListResponse),

  currentMenuList: null,
  setCurrentMenuList: (currentMenuList: MenuList[]) => setCurrentMenuList(set, currentMenuList),
}));
