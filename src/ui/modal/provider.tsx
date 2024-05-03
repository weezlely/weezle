import React from "react";

import { ModalContext } from "./context";

import type { ModalProviderProps } from "./type";

export const ModalProvider = ({ context, children }: ModalProviderProps) => {
  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
};
