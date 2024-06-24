import { DragEndInfo, DragEvent, MouseEventButton } from "./event.type";

export type DragEndEventHandler = (event: DragEvent, info: DragEndInfo) => void;

export type CallbackEventHandler = () => void | undefined;

export type ButtonEventHandler = (event: MouseEventButton) => void;
