import * as React from "react";

import type { RadioContextProps } from "./radio.type";
/**
 * @description this is Radio Group Context mode at create Context
 */

export const RadioContext = React.createContext<RadioContextProps>({ value: undefined, handleChange: () => {}, propsOnChange: () => {} });

/**
 * @description this is hook for using in radio-group Compound Component
 * @returns {context}
 */

export const useRadioContext = () => {
  const context = React.useContext(RadioContext);

  if (!context) {
    throw "Radio context's value is not provided...";
  }

  return context;
};
