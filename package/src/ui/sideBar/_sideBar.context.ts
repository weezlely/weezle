import * as React from "react";

export const SideBarContext = React.createContext({});

/**
 * @description this is hook for using in Side-Navigation Compound Component
 * @returns {context}
 */
export const useSideBar = () => {
  const context = React.useContext(SideBarContext);

  if (!context) {
    throw "value is not provided";
  }

  return context;
};
