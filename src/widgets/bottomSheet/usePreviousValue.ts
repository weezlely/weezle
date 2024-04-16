import { useContext, useEffect, useRef } from "react";

import BottomSheetContext from "./context";
import { UsePreviousValueProps } from "./index.type";

/**
 * 바텀시트 Headerless 안에서 context를 사용하는 훅
 * @returns
 */
export const useBottomSheetContext = () => useContext(BottomSheetContext);

/**
 * 이전의 값을 보여주는 훅
 * @param {boolean} isOpen
 * @returns
 */
export default function usePreviousValue(isOpen: UsePreviousValueProps = false) {
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
