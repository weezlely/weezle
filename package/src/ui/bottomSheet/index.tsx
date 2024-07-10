import { motion as Motion } from "framer-motion";
import type { FC, CSSProperties } from "react";
import { clsx } from "clsx";

import { useBottomSheetContext } from "./_bottomSheet.context";
import { BottomSheetProvider } from "./_bottomSheet.provider";
import * as styles from "./styles.css";
import type { BottomSheetAllProps, BottomSheetBodyProps, BottomSheetHeaderProps, BottomSheetWrapperProps } from "./index.type";

export interface IBottomSheet extends BottomSheetAllProps {}

const BottomSheetWrapper: FC<BottomSheetWrapperProps> = ({
  initial = "visible",
  dragDirection = "y",
  visible = { x: 0, y: 300 },
  full = { x: 0, y: -100 },
  hidden = { x: 0, y: 100 }, // 화면 하단에 조금 남기고 싶은 위치로 조정
  dragElastic = 0.2,
  style,
  children,
  ...rest
}) => {
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

const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({ style, children, ...rest }) => {
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
    <Motion.div className={classNames} animate={controls} style={dynamicStyle} {...(rest as any)}>
      {children}
    </Motion.div>
  );
};

const BottomSheetBody: FC<BottomSheetBodyProps> = ({ style, children, ...rest }: BottomSheetBodyProps) => {
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
    <div className={classNames} style={dynamicStyle} onClick={() => controls?.stop()} {...rest}>
      {children}
    </div>
  );
};

const BottomSheet = Object.assign(BottomSheetProvider, {
  Wrapper: BottomSheetWrapper,
  Header: BottomSheetHeader,
  Body: BottomSheetBody,
});

export default BottomSheet;
