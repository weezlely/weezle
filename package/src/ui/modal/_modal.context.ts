import * as React from "react";

import type { ModalContextProps } from "./index.type";

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
    throw "value not provided";
  }
  return context;
};
