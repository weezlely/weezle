import * as React from "react";
import type { SideBarContextProps } from "./sideBar.type";

export const SideBarContext = React.createContext<SideBarContextProps>({});

/**
 * @description this is hook for using in Side-Navigation Compound Component
 * @returns {context}
 */
export const useSideBar = () => {
  const context = React.useContext(SideBarContext);

  if (!context) {
    throw "SideBar context's value is not provided...";
  }

  return context;
};
