import * as React from "react";
import { CheckBoxContextProps } from "./index.type";

/**
 * @description this is CheckboxContext made bt createContext
 */

export const CheckBoxContext = React.createContext<CheckBoxContextProps>({
  isChecked: false,
  setIsChecked: () => {},
});

/**
 * @description this is hook for using in checkbox Compound Component
 * @returns {context}
 */

export const useCheckBoxContext = () => {
  const context = React.useContext(CheckBoxContext);

  if (!context) {
    throw "value is not provided";
  }

  return context;
};
