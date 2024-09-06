import * as React from "react";

import type { AccordionProviderProps, AccordionType } from "./accordion.type";
import { AccordionContext } from "./accordion.context";
import { useAccordionController } from "./accordion.controller";

export const AccordionProvider: React.FC<AccordionProviderProps> = ({ type = "single", children }) => {
  const accordionControllers = useAccordionController<AccordionType>(type);
  return <AccordionContext.Provider value={accordionControllers}>{children}</AccordionContext.Provider>;
};
