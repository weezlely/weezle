import * as React from "react";

import type { RadioProviderProps } from "./index.type";
import { RadioContext } from "./_radio.context";
import { useRadioController } from "./_radio.controller";

export const RadioProvider: React.FC<RadioProviderProps> = ({ onChange = undefined, children }) => {
  const { value, handleChange } = useRadioController();
  return <RadioContext.Provider value={{ value, handleChange, propsOnChange: onChange }}>{children}</RadioContext.Provider>;
};
