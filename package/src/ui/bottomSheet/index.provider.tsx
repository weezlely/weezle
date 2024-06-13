import type { PropsWithChildren } from "react";

import { BottomSheetContext } from "./index.context";
import { use_bottom_sheet_controller } from "./controller";

/**
 *
 * @param {FC<PropsWithChildren>} param BottomSheet Provider의 Props
 * @returns {React.Context<ContextProps>} Provider
 */
export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
  const { onDragEnd, controls, setIsOpen, isOpen } = use_bottom_sheet_controller();

  return <BottomSheetContext.Provider value={{ onDragEnd, controls, setIsOpen, isOpen }}>{children}</BottomSheetContext.Provider>;
};
