import type { BackgroundColor, Color, ElementProps } from "../../types";

export type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends ElementProps<HTMLHeadingElement> {
  as?: HeadingAs;

  // Style Props
  fontColor?: Color;
  bgColor?: BackgroundColor;
  isUnderline?: boolean;
}
