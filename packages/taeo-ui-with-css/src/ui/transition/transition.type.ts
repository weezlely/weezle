import type { ElementProps } from "../../types";

export type TransitionElement = HTMLElement | HTMLDivElement;

export interface TransitionProps extends ElementProps<TransitionElement> {
  in: boolean;
}
