import { MouseEvent } from "react";

declare global {
  export type ButtonEvent = MouseEvent<HTMLButtonElement>;
  export type ClickEvent = (event: MouseEvent<HTMLButtonElement>) => void;
}
