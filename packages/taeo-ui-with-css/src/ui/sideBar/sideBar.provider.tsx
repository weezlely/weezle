import * as React from "react";
import { SideBarContext } from "./sideBar.context";
import { SideBarProviderProps } from "./sideBar.type";

export const SideBarProvider = ({ children }: SideBarProviderProps) => {
  return <SideBarContext.Provider value={{}}>{children}</SideBarContext.Provider>;
};
