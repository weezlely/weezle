import { motion as Motion } from "framer-motion";
import { type FC } from "react";

import { useBottomSheetContext } from "./context";
import { BottomSheetProvider } from "./provider";

import { BottomSheetContentsProps, BottomSheetHeaderProps, BottomSheetWrapperProps } from "./index.type";
import * as styled from "./index.style";

/**
 * 바텀시트 Headless 안에서 context를 사용하는 훅
 * @returns
 */

const BottomSheetWrapper: FC<BottomSheetWrapperProps> = ({ dragDirection = "y", initial = "visible", style, children, ...rest }): JSX.Element => {
  const { onDragEnd, controls, setIsOpen, isOpen } = useBottomSheetContext();

  return (
    <Motion.div
      initial={initial}
      drag={dragDirection}
      animate={controls}
      onDragEnd={onDragEnd}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400,
      }}
      variants={{
        visible: { y: 300 },
        full: { y: -100 },
        hidden: { y: 100 }, // 화면 하단에 조금 남기고 싶은 위치로 조정
      }}
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
      style={{ ...styled.wrapper, ...style }}
      {...rest}
    >
      {children}
    </Motion.div>
  );
};

const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({ style, children, ...rest }): JSX.Element => {
  const { controls } = useBottomSheetContext();
  return (
    <Motion.div animate={controls} style={{ ...styled.header, ...style }} {...rest}>
      {children}
    </Motion.div>
  );
};

const BottomSheetContents: FC<BottomSheetContentsProps> = ({ style, children, ...rest }): JSX.Element => {
  const { controls } = useBottomSheetContext();

  return (
    <div onClick={() => controls?.stop()} style={{ ...styled.contents, ...style }} {...rest}>
      {children}
    </div>
  );
};

const BottomSheet = Object.assign(BottomSheetProvider, {
  Wrapper: BottomSheetWrapper,
  Header: BottomSheetHeader,
  Contents: BottomSheetContents,
});

export default BottomSheet;
