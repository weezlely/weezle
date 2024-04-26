import React from "react";

import { ModalContext } from "./context";

import { ModalProviderProps } from "./index.type";

export const ModalProvider = ({ context, children }: ModalProviderProps) => {
  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
};
