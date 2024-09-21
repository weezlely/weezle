import * as React from "react";

import type { ModalProviderProps } from "./modal.type";
import { ModalContext } from "./modal.context";

export const ModalProvider = ({ isOpen, onClose, onOpen, children }: ModalProviderProps) => {
  return <ModalContext.Provider value={{ isOpen, onClose, onOpen }}>{children}</ModalContext.Provider>;
};
