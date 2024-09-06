import * as React from "react";

import type { RadioProviderProps } from "./radio.type";
import { RadioContext } from "./radio.context";
import { useRadioController } from "./radio.controller";

export const RadioProvider: React.FC<RadioProviderProps> = ({ onChange = undefined, children }) => {
  const { value, handleChange } = useRadioController();
  return <RadioContext.Provider value={{ value, handleChange, propsOnChange: onChange }}>{children}</RadioContext.Provider>;
};
