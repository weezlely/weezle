import { createContext, useContext } from "react";

import type { FlyoutContextProps } from "./index.type";

/**
 * @description this is FlyoutContext made bt createContext
 */

export const FlyoutContext = createContext<FlyoutContextProps>({ isOpen: false, toggle: () => {} });

/**
 * @description this is hook for using in Flyout Compound Component
 * @returns {Context}
 */
export const useFlyoutContext = () => {
  const context = useContext(FlyoutContext);

  if (!context) {
    throw "value is not provided";
  }

  return context;
};
