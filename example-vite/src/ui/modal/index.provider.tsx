import React from "react";

import type { ModalProviderProps } from "./index.type";
import { ModalContext } from "./index.context";

export const ModalProvider = ({ isOpen, onClose, onOpen, children }: ModalProviderProps) => {
  return <ModalContext.Provider value={{ isOpen, onClose, onOpen }}>{children}</ModalContext.Provider>;
};
