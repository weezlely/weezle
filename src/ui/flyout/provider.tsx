import React from "react";
import { FlyoutContext } from "./context";
import { FlyoutProviderProps } from "./index.type";

export const FlyoutProvider = ({ children }: FlyoutProviderProps) => {
  const [isOpen, toggle] = React.useState<boolean>(false);
  return <FlyoutContext.Provider value={{ isOpen, toggle }}>{children}</FlyoutContext.Provider>;
};
