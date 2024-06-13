import { createContext, useContext } from "react";
import type { RadioContextProps } from "./index.type";
/**
 * @description this is Radio Group Context mode at create Context
 */

export const RadioContext = createContext<RadioContextProps>({ value: undefined, handleChange: () => {}, propsOnChange: () => {} });

/**
 * @description this is hook for using in radio-group Compound Component
 * @returns {context}
 */

export const useRadioContext = () => {
  const context = useContext(RadioContext);

  if (!context) {
    throw "value is not provided";
  }

  return context;
};
