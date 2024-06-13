import type { PanInfo } from "framer-motion";

export type OnDragEndEvent = MouseEvent | TouchEvent | PointerEvent;
export type OnDragEndInfo = PanInfo;
export type OnDragEnd = (event: OnDragEndEvent, info: OnDragEndInfo) => void;
