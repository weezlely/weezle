/**
 * =================================================================
 *                              Style
 * =================================================================
 */
import { style, styleVariants } from "@vanilla-extract/css";

export const typography = style({
  margin: 0,
  padding: 0,
  fontFamily: "'Arial', sans-serif",
  fontWeight: 400,
  lineHeight: 1.5,
});

/**
 * =================================================================
 *                         Style's Variants
 * =================================================================
 */

export const textAlign = styleVariants({
  center: { textAlign: "center" },
  end: { textAlign: "end" },
  justify: { textAlign: "justify" },
  left: { textAlign: "left" },
  "match-parent": { textAlign: "match-parent" },
  right: { textAlign: "right" },
  start: { textAlign: "start" },
});

export const fontSize = styleVariants({
  xs: { fontSize: "12px" },
  sm: { fontSize: "14px" },
  md: { fontSize: "16px" },
  lg: { fontSize: "18px" },
  xl: { fontSize: "20px" },
  xxl: { fontSize: "24px" },
  xxxl: { fontSize: "28px" },
});
