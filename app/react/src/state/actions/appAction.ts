import type { Theme } from "@/types";
import type { AppState, SetAction } from "@/state";

export const setTheme = (set: SetAction<AppState>, theme: Theme) => {
  set((state: AppState) => ({ theme }));
};

export const setDrawer = (set: SetAction<AppState>, isActive: boolean) => {
  set((state: AppState) => ({ drawer: isActive }));
};

export const setIsEntry = (set: SetAction<AppState>, isEntry: boolean) => {
  set((state: AppState) => ({ isEntry }));
};
