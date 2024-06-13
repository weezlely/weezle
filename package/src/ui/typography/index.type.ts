import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import * as styles from "./index.css";

type Props = {
  as?: "span" | "p";
  size?: keyof typeof styles.fontSize;
  textAlign?: keyof typeof styles.textAlign;
  color?: CSSProperties["color"] | Color;
  backgroundColor?: CSSProperties["color"] | Color;
};
export type TypographyElement = HTMLSpanElement | HTMLParagraphElement;

export type TypographyProps = PropsWithChildren<Props> & HTMLAttributes<TypographyElement>;
