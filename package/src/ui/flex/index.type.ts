import type { HTMLAttributes, PropsWithChildren } from "react";

type Props = {
  dir?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  gap?: number;
  [key: string]: any;
};

export type FlexProps = PropsWithChildren<Props> & HTMLAttributes<HTMLSpanElement>;
