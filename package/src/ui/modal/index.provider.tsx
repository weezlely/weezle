import React from "react";

import { ModalContext } from "./index.context";

import type { ModalProviderProps } from "./index.type";

export const ModalProvider = ({ isOpen, onClose, onOpen, children }: ModalProviderProps) => {
  return <ModalContext.Provider value={{ isOpen, onClose, onOpen }}>{children}</ModalContext.Provider>;
};
