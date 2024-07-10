import * as React from "react";

import type { ModalProviderProps } from "./index.type";
import { ModalContext } from "./_modal.context";

export const ModalProvider: React.FC<ModalProviderProps> = ({ isOpen, onClose, onOpen, children }) => {
  return <ModalContext.Provider value={{ isOpen, onClose, onOpen }}>{children}</ModalContext.Provider>;
};
