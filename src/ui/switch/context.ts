import { createContext, useContext } from "react";
import { SwitchContextProps } from "./type";

/**
 * @description this is Switch Context made bt createContext
 */

export const SwitchContext = createContext<SwitchContextProps>({
  isOn: false,
  toggle: () => {},
});

/**
 * @description this is hook for using in Switch Compound Component
 * @returns {context}
 */
export const useSwitchContext = () => {
  const context = useContext(SwitchContext);

  if (!context) {
    throw "value is not provided";
  }

  return context;
};
