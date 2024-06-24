import { createContext, useContext } from "react";

export const SideBarContext = createContext({});

/**
 * @description this is hook for using in Side-Navigation Compound Component
 * @returns {context}
 */
export const useSideBar = () => {
  const context = useContext(SideBarContext);

  if (!context) {
    throw "value is not provided";
  }

  return context;
};
