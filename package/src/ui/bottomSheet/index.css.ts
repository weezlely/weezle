import { style } from "@vanilla-extract/css";

/**
 * =================================================================
 *                              Style
 * =================================================================
 */

export const BOTTOM_SHEET_HEIGHT = window.innerHeight;

export const wrapper = style({
  flexDirection: "column",
  position: "fixed",
  zIndex: 10,
  top: "20vh",
  left: 0,
  right: 0,
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)",
  height: `${BOTTOM_SHEET_HEIGHT}px`,
  margin: "0 auto",
  overflow: "auto",
});

export const header = style({ width: "32px", height: "4px", borderRadius: "8px", backgroundColor: "#d0d0d0", margin: "auto", marginTop: "20px" });

export const contents = style({
  height: "80vh",
  padding: "2rem",
  zIndex: 99,
});
