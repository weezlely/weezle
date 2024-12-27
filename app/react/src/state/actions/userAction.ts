import type { MenuData, MenuList, MenuListResponse } from "@/types";
import type { UserStoreState, SetAction } from "@/state";

export const setMenuList = (set: SetAction<UserStoreState>, menuList: MenuData[]) => {
  set((state: UserStoreState) => ({ menuList }));
};

export const setMenuListResponse = (set: SetAction<UserStoreState>, menuListResponse: MenuListResponse) => {
  set((state: UserStoreState) => ({ menuListResponse }));
};

export const setCurrentMenuList = (set: SetAction<UserStoreState>, currentMenuList: MenuList[]) => {
  set((state: UserStoreState) => ({ currentMenuList }));
};
