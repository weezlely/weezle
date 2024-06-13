import { createContext, useContext } from "react";
import { CheckBoxContextProps } from "./index.type";

/**
 * @description this is CheckboxContext made bt createContext
 */

export const CheckBoxContext = createContext<CheckBoxContextProps>({
  isChecked: false,
  setIsChecked: () => {},
});

/**
 * @description this is hook for using in checkbox Compound Component
 * @returns {context}
 */

export const useCheckBoxContext = () => {
  const context = useContext(CheckBoxContext);

  if (!context) {
    throw "value is not provided";
  }

  return context;
};
