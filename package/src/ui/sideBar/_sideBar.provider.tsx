import type { FC, PropsWithChildren } from "react";

import { SideBarContext } from "./_sideBar.context";

export const SideBarProvider: FC<PropsWithChildren> = ({ children }) => {
  return <SideBarContext.Provider value={{}}>{children}</SideBarContext.Provider>;
};
