import * as React from "react";
import { AccordionContextProps } from "./accordion.type";

/**
 * @description this is Accordion Context made bt createContext
 */

export const AccordionContext = React.createContext<AccordionContextProps>({
  type: "single",
  openIndex: new Set(),
  handleChangeIndex: () => {},
});

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);

  if (!context) {
    throw "Accordion Context is not provided";
  }

  return context;
};
