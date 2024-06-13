import { CSSProperties, MouseEvent } from "react";
import { fontWeights } from "styles";

declare global {
  export type ID = string | number;
  export type Variant = "primary" | "secondary" | "default";
  export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  export type ButtonEvent = MouseEvent<HTMLButtonElement> | MouseEvent<HTMLInputElement>;
  export type ClickEvent = (event: MouseEvent<HTMLButtonElement>) => void;
  export type Color = string;
  export type Colors = { [key in string]: string };
  export type FontWeight = keyof typeof fontWeights;
}
