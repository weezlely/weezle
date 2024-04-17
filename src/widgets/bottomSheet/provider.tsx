import { type PropsWithChildren, type FC, createContext } from "react";

import { ContextProps } from "./index.type";
import { useBottomSheet } from "./hooks";

export const BottomSheetContext = createContext<ContextProps>({
  onDragEnd: () => {},
  controls: undefined,
  setIsOpen: () => {},
  isOpen: true,
});

/**
 *
 * @param {FC<PropsWithChildren>} param BottomSheet Provider의 Props
 * @returns {React.Context<ContextProps>} Provider
 */
export const BottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {
  const { onDragEnd, controls, setIsOpen, isOpen } = useBottomSheet();

  return <BottomSheetContext.Provider value={{ onDragEnd, controls, setIsOpen, isOpen }}>{children}</BottomSheetContext.Provider>;
};
