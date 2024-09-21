import * as React from "react";

import type { ModalContextProps } from "./modal.type";

/**
 * @description this is ModalContext made bt createContext
 */

export const ModalContext = React.createContext<ModalContextProps>({ isOpen: false, onClose: () => {}, onOpen: () => {} });

/**
 * @description this is hook for using in Modal Compound Component
 * @returns {context}
 */

export const useModalContext = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw "Modal context's value is not provided...";
  }
  return context;
};
