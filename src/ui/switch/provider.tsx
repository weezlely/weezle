import { useState } from "react";
import { SwitchContext } from "./context";
import { SwitchProviderProps } from "./index.type";

export const SwitchProvider = ({ isOn, toggle, children }: SwitchProviderProps) => {
  return <SwitchContext.Provider value={{ isOn, toggle }}>{children}</SwitchContext.Provider>;
};
