import { useEffect, useRef } from "react";

/**
 * 이전의 값을 보여주는 훅
 * @param {boolean} isOpen
 * @returns {boolean | null}
 */
export default function usePreviousValue(isOpen: boolean | null = false) {
  const previousValueRef = useRef<boolean | null>(isOpen);

  useEffect(() => {
    if (previousValueRef.current !== null) {
      previousValueRef.current = isOpen;
    } else {
      previousValueRef.current = isOpen;
    }
  }, [isOpen]);

  return previousValueRef.current as boolean | null;
}
