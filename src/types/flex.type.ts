import type { CSSProperties } from "react";

export type FlexProps = {
  direction?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  gap?: number;
};
