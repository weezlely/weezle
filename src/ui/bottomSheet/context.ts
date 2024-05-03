import { createContext, useContext } from "react";
import type { ContextProps } from "./type";

/**
 * @description this is Bottom-Sheet Context made bt createContext
 */

export const BottomSheetContext = createContext<ContextProps>({
  onDragEnd: () => {},
  controls: undefined,
  setIsOpen: () => {},
  isOpen: true,
});

/**
 * @description this is hook for using in Bottom-Sheet Compound Component
 * @returns {context}
 */

export const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);

  if (!context) {
    throw "value is not provided";
  }

  return context;
};
