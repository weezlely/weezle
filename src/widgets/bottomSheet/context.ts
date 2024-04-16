import { createContext, useContext } from "react";
import { ContextProps } from "./index.type";

const BottomSheetContext = createContext<ContextProps>({
  onDragEnd: () => {},
  controls: undefined,
  setIsOpen: () => {},
  isOpen: true,
});

export default BottomSheetContext;
