import { type PropsWithChildren, type FC } from "react";
import { ContextProps } from "./index.type";
export declare const BottomSheetContext: import("react").Context<ContextProps>;
/**
 *
 * @param {FC<PropsWithChildren>} param BottomSheet Provider의 Props
 * @returns {React.Context<ContextProps>} Provider
 */
export declare const BottomSheetProvider: FC<PropsWithChildren>;
