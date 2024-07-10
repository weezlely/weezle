import * as React from "react";

import { SwitchContext } from "./_switch.context";
import { SwitchProviderProps } from "./index.type";

export const SwitchProvider: React.FC<SwitchProviderProps> = ({ isOn, toggle, children }) => {
  return <SwitchContext.Provider value={{ isOn, toggle }}>{children}</SwitchContext.Provider>;
};
