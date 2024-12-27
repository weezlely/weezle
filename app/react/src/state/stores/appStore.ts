import { create } from "zustand";

import type { Theme } from "@/types";
import { setTheme, setDrawer, setIsEntry } from "@/state";

export interface AppState {
  // Theme State
  theme: Theme;
  setTheme: (theme: Theme) => void;

  // Drawer State
  drawer: boolean;
  setDrawer: (isActive: boolean) => void;

  // Main Header
  isEntry: boolean;
  setIsEntry: (isEntry: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: "light",
  setTheme: (theme: Theme) => setTheme(set, theme!),

  drawer: false,
  setDrawer: (isActive: boolean) => setDrawer(set, isActive),

  isEntry: false,
  setIsEntry: (isEntry: boolean) => setIsEntry(set, isEntry),
}));
