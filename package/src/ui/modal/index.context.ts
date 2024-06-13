import { createContext, useContext } from "react";
import type { ModalContextProps } from "./index.type";

/**
 * @description this is ModalContext made bt createContext
 */

export const ModalContext = createContext<ModalContextProps>({ isOpen: false, onClose() {}, onOpen() {} });

/**
 * @description this is hook for using in Modal Compound Component
 * @returns {context}
 */

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw "value not provided";
  }
  return context;
};
