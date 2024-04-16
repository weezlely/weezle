import type { AnimationControls, PanInfo } from "framer-motion";
import type { CSSProperties, PropsWithChildren } from "react";
export type OnDragEndEvent = MouseEvent | TouchEvent | PointerEvent;
export type OnDragEndInfo = PanInfo;
export type OnDragEnd = (event: OnDragEndEvent, info: OnDragEndInfo) => void;
export type ContextProps = {
    onDragEnd: OnDragEnd;
    controls?: AnimationControls;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
};
/** BottomSheet Context */
export type BottomSheetContextProps = PropsWithChildren<{}>;
/** BottomSheet Wrapper */
export type BottomSheetWrapperProps = PropsWithChildren<{
    dragDirection?: "x" | "y";
    initial?: "visible" | "active" | "hidden";
    style?: CSSProperties;
}>;
/** BottomSheet Header */
export type BottomSheetHeaderProps = PropsWithChildren<{
    style?: CSSProperties;
}>;
/** BottomSheet Contents */
export type BottomSheetContentsProps = PropsWithChildren<{
    style?: CSSProperties;
}>;
export type UsePreviousValueProps = boolean | null;
