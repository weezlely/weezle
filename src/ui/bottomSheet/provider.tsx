import type { PropsWithChildren, FC } from "react";

import { BottomSheetContext } from "./context";
import { useBottomSheet } from "./hooks";

/**
 *
 * @param {FC<PropsWithChildren>} param BottomSheet Provider의 Props
 * @returns {React.Context<ContextProps>} Provider
 */
export const BottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {
  const { onDragEnd, controls, setIsOpen, isOpen } = useBottomSheet();

  return <BottomSheetContext.Provider value={{ onDragEnd, controls, setIsOpen, isOpen }}>{children}</BottomSheetContext.Provider>;
};
