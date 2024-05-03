import { useState } from "react";
import { RadioContext } from "./context";
import type { RadioProviderProps } from "./type";

export const RadioProvider = ({ children }: RadioProviderProps) => {
  const [value, setValue] = useState(undefined);

  return <RadioContext.Provider value={{ value, setValue }}>{children}</RadioContext.Provider>;
};
