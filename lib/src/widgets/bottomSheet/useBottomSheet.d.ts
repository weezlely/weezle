/// <reference types="react" />
import { OnDragEndEvent, OnDragEndInfo } from "./index.type";
/**
 * @description 바텀시트 관리 훅
 * @returns
 */
export default function useBottomSheet(): {
    onDragEnd: (event: OnDragEndEvent, info: OnDragEndInfo) => void;
    controls: import("framer-motion").AnimationControls;
    setIsOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    isOpen: boolean;
};
