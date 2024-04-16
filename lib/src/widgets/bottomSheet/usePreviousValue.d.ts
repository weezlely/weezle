import { UsePreviousValueProps } from "./index.type";
/**
 * 바텀시트 Headerless 안에서 context를 사용하는 훅
 * @returns
 */
export declare const useBottomSheetContext: () => import("./index.type").ContextProps;
/**
 * 이전의 값을 보여주는 훅
 * @param {boolean} isOpen
 * @returns
 */
export default function usePreviousValue(isOpen?: UsePreviousValueProps): UsePreviousValueProps;
