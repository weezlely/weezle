import { createContext, useContext } from "react";
import { SwitchContextProps } from "./index.type";

export const SwitchContext = createContext<SwitchContextProps>({
  isOn: false,
  toggle: () => {},
});
export const useSwitchContext = () => useContext(SwitchContext);
