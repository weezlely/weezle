import { useState } from "react";
import { FlyoutContext } from "./context";
import { FlyoutProviderProps } from "./index.type";

export const FlyoutProvider = ({ children }: FlyoutProviderProps) => {
  const [isOpen, toggle] = useState<boolean>(false);

  return <FlyoutContext.Provider value={{ isOpen, toggle }}>{children}</FlyoutContext.Provider>;
};
