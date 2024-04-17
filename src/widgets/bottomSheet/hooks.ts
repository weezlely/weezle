import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { OnDragEndEvent, OnDragEndInfo, UsePreviousValueProps } from "./index.type";

/**
 * 이전의 값을 보여주는 훅
 * @param {boolean} isOpen
 * @returns
 */
export function usePreviousValue(isOpen: UsePreviousValueProps = false) {
  const previousValueRef = useRef<UsePreviousValueProps>(isOpen);

  useEffect(() => {
    if (previousValueRef.current !== null) {
      previousValueRef.current = isOpen;
    } else {
      previousValueRef.current = isOpen;
    }
  }, [isOpen]);

  return previousValueRef.current as UsePreviousValueProps;
}

/**
 * @description 바텀시트 관리 훅
 * @returns
 */
export function useBottomSheet() {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(true);
  const prevIsOpen = usePreviousValue(isOpen!) || false;

  const onDragEnd = (event: OnDragEndEvent, info: OnDragEndInfo) => {
    const shouldClose = info.point?.y > 20 || (info.point?.y >= 0 && info.point.y > 45);

    if (shouldClose) {
      controls.start("hidden");
      setIsOpen(false);
    } else {
      controls.start("full");
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (prevIsOpen !== null && prevIsOpen !== isOpen) {
      if (isOpen) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }
  }, [controls, isOpen, prevIsOpen]);

  return { onDragEnd, controls, setIsOpen, isOpen };
}
