import { motion as Motion } from "framer-motion";
import type { CSSProperties, ForwardedRef } from "react";
import { forwardRef } from "react";
import { clsx } from "clsx";

import type { BottomSheetBodyProps, BottomSheetHeaderProps, BottomSheetWrapperProps, MotionDivElement } from "./bottomSheet.type";
import { useBottomSheetContext } from "./bottomSheet.context";
import { BottomSheetProvider } from "./bottomSheet.provider";
import * as styles from "./styles.css";

const BottomSheetWrapper = <T extends MotionDivElement>(
  {
    initial = "visible",
    dragDirection = "y",
    visible = { x: 0, y: 300 },
    full = { x: 0, y: -100 },
    hidden = { x: 0, y: 100 }, // 화면 하단에 조금 남기고 싶은 위치로 조정
    dragElastic = 0.2,
    style,
    children,
    ...rest
  }: BottomSheetWrapperProps,

  forwardedRef: ForwardedRef<T>
) => {
  const { onDragEnd, controls, setIsOpen, isOpen } = useBottomSheetContext();

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.wrapper];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx("bottom-sheet__wrapper", ...staticStyle);
  return (
    <Motion.div
      ref={forwardedRef}
      className={classNames}
      initial={initial}
      drag={dragDirection}
      animate={controls}
      dragElastic={dragElastic}
      transition={{ type: "spring", damping: 40, stiffness: 400 }}
      variants={{ visible, full, hidden }}
      dragConstraints={{ top: 0 }}
      onDragEnd={onDragEnd}
      style={dynamicStyle}
      {...(rest as any)}
    >
      {children}
    </Motion.div>
  );
};

const BottomSheetHeader = <T extends MotionDivElement>(
  { style, children, ...rest }: BottomSheetHeaderProps,

  forwardedRef: ForwardedRef<T>
) => {
  const { controls } = useBottomSheetContext();

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.header];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx("bottom-sheet__header", ...staticStyle);

  return (
    <Motion.div ref={forwardedRef} className={classNames} animate={controls} style={dynamicStyle} {...(rest as any)}>
      {children}
    </Motion.div>
  );
};

const BottomSheetBody = <T extends HTMLDivElement>(
  { style, children, ...rest }: BottomSheetBodyProps,

  forwardedRef: ForwardedRef<T>
) => {
  const { controls } = useBottomSheetContext();

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.contents];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx("bottom-sheet__contents", ...staticStyle);

  return (
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} onClick={() => controls?.stop()} {...rest}>
      {children}
    </div>
  );
};

const BottomSheet = Object.assign(BottomSheetProvider, {
  Wrapper: forwardRef(BottomSheetWrapper),
  Header: forwardRef(BottomSheetHeader),
  Body: forwardRef(BottomSheetBody),
});

export default BottomSheet;
