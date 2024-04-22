import { createContext, useContext } from "react";
import { ContextProps } from "./index.type";

export const BottomSheetContext = createContext<ContextProps>({
  onDragEnd: () => {},
  controls: undefined,
  setIsOpen: () => {},
  isOpen: true,
});

export const useBottomSheetContext = () => useContext(BottomSheetContext);
