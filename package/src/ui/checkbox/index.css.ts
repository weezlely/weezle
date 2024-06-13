import { style } from "@vanilla-extract/css";

/**
 * =================================================================
 *                              Style
 * =================================================================
 */

export const label = style({
  display: "flex",
  alignItems: "center",
  userSelect: "none",
});

export const input = style({
  appearance: "none", // appearance 속성 확인
  width: "1.5rem",
  height: "1.5rem",
  border: "1.5px solid gainsboro",
  borderRadius: "0.35rem",
  display: "inline-block",
  verticalAlign: "middle",
});

export const p = style({
  marginLeft: "0.25rem",
});

export const checked = style({
  borderColor: "transparent",
  backgroundSize: "100% 100%",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
});
