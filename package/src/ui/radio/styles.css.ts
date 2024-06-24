import { style } from "@vanilla-extract/css";

/**
 * =================================================================
 *                              Style
 * =================================================================
 */

export const label = style({
  display: "inline-block",
  position: "relative",
  paddingLeft: "25px",
  marginRight: "10px",
  cursor: "pointer",
  fontSize: "14px",
  userSelect: "none",
});

export const on = style({
  width: "20px",
  height: "20px",
  background: "#ddd",
  borderRadius: "50%",
  position: "absolute",
  top: 0,
  left: 0,
  selectors: {
    "&:after": {
      content: '""',
      position: "absolute",
      display: "none",
      width: "10px",
      height: "10px",
      background: "#fff",
      borderRadius: "50%",
      left: "5px",
      top: "5px",
    },
  },
});

export const checked = style({
  background: "#f86480",
  selectors: {
    "&:after": {
      display: "block",
    },
  },
});
export const hiddenRadio = style({
  display: "none",
});
