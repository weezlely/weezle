import { create } from "zustand";

import type { MenuData } from "@/types";
import { setMenuList } from "@/state";

export interface UserStoreState {
  menuList: MenuData[];
  setMenuList: (menuList: MenuData[]) => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
  menuList: [],
  setMenuList: (menuList: MenuData[]) => setMenuList(set, menuList),
}));
