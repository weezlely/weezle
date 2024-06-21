import type { PanInfo } from "framer-motion";
import type { MouseEvent } from "react";

export type DragEvent = MouseEvent | TouchEvent | PointerEvent;

export type DragEndInfo = PanInfo;

/**
 * @description Mouse's button event
 */
export type MouseEventButton = MouseEvent<HTMLButtonElement>;

/**
 * @description Mouse's input event
 */
export type MouseEventInput = MouseEvent<HTMLInputElement>;
