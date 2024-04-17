import { type FC } from "react";
import { BottomSheetContentsProps, BottomSheetHeaderProps, BottomSheetWrapperProps } from "./index.type";
declare const BottomSheet: FC<{
    children?: import("react").ReactNode;
}> & {
    Wrapper: FC<BottomSheetWrapperProps>;
    Header: FC<BottomSheetHeaderProps>;
    Contents: FC<BottomSheetContentsProps>;
};
export default BottomSheet;
