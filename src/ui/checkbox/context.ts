import { createContext, useContext } from "react";
import { CheckBoxContextProps } from "./index.type";

export const CheckBoxContext = createContext<CheckBoxContextProps>({
  isChecked: false,
  setIsChecked: () => {},
});

export const useCheckBoxContext = () => useContext(CheckBoxContext);
