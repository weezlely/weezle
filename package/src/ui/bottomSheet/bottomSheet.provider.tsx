import type { PropsWithChildren } from "react";

import { BottomSheetContext } from "./bottomSheet.context";
import { useBottomSheetController } from "./bottomSheet.controller";

/**
 *
 * @param {FC<PropsWithChildren>} param BottomSheet Provider의 Props
 * @returns {React.Context<ContextProps>} Provider
 */
export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
  const bottomSheetController = useBottomSheetController();

  return <BottomSheetContext.Provider value={bottomSheetController}>{children}</BottomSheetContext.Provider>;
};
