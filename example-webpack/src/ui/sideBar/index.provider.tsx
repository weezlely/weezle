import { PropsWithChildren } from "react";

import { SideBarContext } from "./context";

export const SideBarProvider = ({ children }: PropsWithChildren) => {
  return <SideBarContext.Provider value={{}}>{children}</SideBarContext.Provider>;
};
