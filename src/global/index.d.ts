import { MouseEvent } from "react";
import { colors } from "../..";

declare global {
  export type ButtonEvent = MouseEvent<HTMLButtonElement>;
  export type ClickEvent = (event: MouseEvent<HTMLButtonElement>) => void;
  export type Colors = { [key in string]: T };
  export type TypographyElement = HTMLSpanElement | HTMLHeadingElement;
}
