import type { HTMLAttributes, PropsWithChildren } from "react";

import { DefaultProps, KeyAbles } from "../../types";

type Props = {
  dir?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  gap?: number;
} & KeyAbles;

export type FlexProps = PropsWithChildren<Props> & HTMLAttributes<HTMLSpanElement> & DefaultProps;
