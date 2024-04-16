import { type FC } from "react";
import { BottomSheetContentsProps, BottomSheetHeaderProps, BottomSheetWrapperProps } from "./index.type";
/**
 * 바텀시트 Headless 안에서 context를 사용하는 훅
 * @returns
 */
export declare const useBottomSheetContext: () => import("./index.type").ContextProps;
declare const BottomSheet: FC<{
    children?: import("react").ReactNode;
}> & {
    Wrapper: FC<BottomSheetWrapperProps>;
    Header: FC<BottomSheetHeaderProps>;
    Contents: FC<BottomSheetContentsProps>;
};
export default BottomSheet;
