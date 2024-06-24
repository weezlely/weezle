import { style, styleVariants } from "@vanilla-extract/css";

/**
 * =================================================================
 *                              Style
 * =================================================================
 */

export const container = style({
  display: "inline-block",
  position: "relative",
  paddingLeft: "25px",
  marginRight: "10px",
  cursor: "pointer",
  fontSize: "14px",
  userSelect: "none",
});
export const overlay = style({
  position: "fixed",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  zIndex: "9",
});
export const toggle = style({
  width: "auto",
});
export const header = style({
  fontSize: "18px",
  fontWeight: 500,
  padding: "4px",
  borderBottom: "1px groove rgba(0, 0, 0, 0.1)",
});
export const list = style({
  top: "8px",
  left: "0",
  zIndex: "99",
  height: "100%",
  padding: "8px",
  boxSizing: "border-box",
  backgroundColor: "#fff",
  borderBottom: "1px groove rgba(0, 0, 0, 0.1)",
  borderRight: "1px groove rgba(0, 0, 0, 0.1)",
  overflowY: "auto",
  transition: "opacity 0.35s ease-in-out",
  display: "flex",
});

export const item = style({
  height: "auto",
  fontSize: "14px",
  marginTop: "8px",
  marginBottom: "8px",
});

/**
 * =================================================================
 *                         Style's Variants
 * =================================================================
 */

export const positionVariants = styleVariants({
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  sticky: { position: "sticky" },
  static: { position: "static" },
});
export const directionVariants = styleVariants({
  row: { flexDirection: "row", gap: "8px" },
  column: { flexDirection: "column", gap: "8px" },
  rowReverse: { flexDirection: "row-reverse", gap: "8px" },
  columnReverse: { flexDirection: "column-reverse", gap: "8px" },
});
