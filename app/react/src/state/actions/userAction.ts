import type { MenuData } from "@/types";
import type { UserStoreState, SetAction } from "@/state";

export const setMenuList = (set: SetAction<UserStoreState>, menuList: MenuData[]) => {
  set((state: UserStoreState) => ({ menuList }));
};
