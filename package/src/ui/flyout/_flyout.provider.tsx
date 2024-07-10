import * as React from "react";

import type { FlyoutProviderProps } from "./index.type";
import { FlyoutContext } from "./_flyout.context";

export const FlyoutProvider: React.FC<FlyoutProviderProps> = ({ children }) => {
  const [isOpen, toggle] = React.useState<boolean>(false);
  return <FlyoutContext.Provider value={{ isOpen, toggle }}>{children}</FlyoutContext.Provider>;
};
