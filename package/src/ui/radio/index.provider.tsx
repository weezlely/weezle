import { useState } from "react";
import { RadioContext } from "./index.context";
import type { RadioProviderProps } from "./index.type";

export const RadioProvider = ({ onChange = undefined, children }: RadioProviderProps) => {
  const [value, setValue] = useState<ID>("");

  const handleChange = (value: ID) => {
    setValue(value); // Update the selected value when a radio option is selected
  };

  return <RadioContext.Provider value={{ value, handleChange, propsOnChange: onChange }}>{children}</RadioContext.Provider>;
};
