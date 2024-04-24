import React from "react";
import { FlyoutContext } from "./context";
import { FlyoutProviderProps } from "./index.type";

export const FlyoutProvider = ({ isOpen, toggle, children }: FlyoutProviderProps) => {
  return <FlyoutContext.Provider value={{ isOpen, toggle }}>{children}</FlyoutContext.Provider>;
};
