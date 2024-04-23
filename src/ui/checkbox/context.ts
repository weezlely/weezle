import { createContext, useContext } from "react";
import { ContextProps } from "./index.type";

export const CheckBoxContext = createContext<ContextProps>({
  isChecked: false,
  setIsChecked: () => {},
});

export const useCheckBoxContext = () => useContext(CheckBoxContext);
