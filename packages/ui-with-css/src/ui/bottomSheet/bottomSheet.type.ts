import type { AnimationControls, DragElastic, HTMLMotionProps } from "framer-motion";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";

import type { ElementProps, DragEndEventHandler } from "../../types";

type XY = { x?: number; y?: number };

type ContextProps = {
  onDragEnd: DragEndEventHandler;
  controls?: AnimationControls;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

export type MotionDivElement = HTMLDivElement | HTMLMotionProps<"div">;

//  Bottom Sheet's Context
export interface BottomSheetContextProps extends ContextProps {}

// Bottom Sheet's provider
export interface BottomSheetProviderProps extends PropsWithChildren {}

// Bottom Sheet's Wrapper
export interface BottomSheetWrapperProps extends ElementProps<MotionDivElement> {
  dragDirection?: "x" | "y"; // 드래그 방향
  initial?: "visible" | "active" | "hidden";
  full?: XY;
  visible?: XY;
  hidden?: XY | any;
  dragElastic?: DragElastic;
}

// Bottom Sheet's Header
export interface BottomSheetHeaderProps extends ElementProps<MotionDivElement> {}

// Bottom Sheet's Body
export interface BottomSheetBodyProps extends ElementProps<HTMLElement> {}
