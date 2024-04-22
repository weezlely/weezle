import { MouseEvent } from "react";

export type Variant = "primary" | "secondary" | "default";
export type ButtonEvent = MouseEvent<HTMLButtonElement>;
export type ClickEvent = (event: MouseEvent<HTMLButtonElement>) => void;
export type Colors = { [key in string]: string };
export type TypographyElement = HTMLSpanElement | HTMLHeadingElement;
