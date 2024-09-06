import type { ComponentProps } from "../../types";

export type TransitionElement = HTMLElement | HTMLDivElement;

export interface TransitionProps extends ComponentProps<TransitionElement> {
  in: boolean;
}
