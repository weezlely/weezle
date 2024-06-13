import type { AnimationControls, DragElastic, HTMLMotionProps } from "framer-motion";
import type { Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";
import { OnDragEnd } from "../../types";

type XY = {
  x?: number;
  y?: number;
};

type ContextProps = {
  onDragEnd: OnDragEnd;
  controls?: AnimationControls;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

type ProviderProps = {};

type WrapperProps = {
  dragDirection?: "x" | "y"; // 드래그 방향
  initial?: "visible" | "active" | "hidden";
  full?: XY;
  visible?: XY;
  hidden?: XY | any;
  dragElastic?: DragElastic;
};

type HeaderProps = {};

type BodyProps = {};

export type MotionDivElement = HTMLDivElement | HTMLMotionProps<"div">;

//  Bottom Sheet's Context
export type BottomSheetContextProps = PropsWithChildren<ContextProps>;

// Bottom Sheet's provider
export type BottomSheetProviderProps = PropsWithChildren<ProviderProps>;

// Bottom Sheet's Wrapper
export type BottomSheetWrapperProps = PropsWithChildren<WrapperProps> & HTMLAttributes<MotionDivElement>;

// Bottom Sheet's Header
export type BottomSheetHeaderProps = PropsWithChildren<HeaderProps> & HTMLAttributes<MotionDivElement>;

// Bottom Sheet's Body
export type BottomSheetBodyProps = PropsWithChildren<BodyProps> & HTMLAttributes<HTMLElement>;

// Bottom Sheet's All Props
export type BottomSheetAllProps = BottomSheetContextProps & BottomSheetProviderProps & BottomSheetHeaderProps & BottomSheetBodyProps;
