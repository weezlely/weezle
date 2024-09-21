import type { HTMLAttributes, PropsWithChildren } from "react";

export type FlexElement = HTMLDivElement & HTMLElement & HTMLSpanElement;
export interface FlexProps extends HTMLAttributes<HTMLSpanElement>, PropsWithChildren {
  as?: "div" | "span";
  dir?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  gap?: number;
}
