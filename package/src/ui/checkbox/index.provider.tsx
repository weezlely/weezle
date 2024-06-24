import type { FC } from "react";
import * as React from "react";

import { CheckBoxContext } from "./index.context";
import { CheckBoxProviderProps } from "./index.type";

export const CheckBoxProvider: FC<CheckBoxProviderProps> = ({ children }) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  return <CheckBoxContext.Provider value={{ isChecked, setIsChecked }}>{children}</CheckBoxContext.Provider>;
};
