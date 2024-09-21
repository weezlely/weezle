import * as React from "react";
import type { CheckBoxContextProps } from "./checkbox.type";

/**
 * @description this is CheckboxContext made bt createContext
 */

export const CheckBoxContext = React.createContext<CheckBoxContextProps>({
  checkedValue: "",
  setCheckedValue: () => {},
});

/**
 * @description this is hook for using in checkbox Compound Component
 * @returns {context}
 */

export const useCheckBoxContext = () => {
  const context = React.useContext(CheckBoxContext);

  if (!context) {
    throw "CheckBox context's value is not provided...";
  }

  return context;
};
