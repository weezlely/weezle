import { style, styleVariants } from "@vanilla-extract/css";

/**
 * =================================================================
 *                              Style
 * =================================================================
 */

export const baseButton = style({
  position: "relative",
  border: "none",
  padding: 10,
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontFamily: "Helvetica",
  zIndex: 10,
  filter: "brightness(100%)",
  transition: "filter 0.3s",
});

/**
 * =================================================================
 *                         Style's Variants
 * =================================================================
 */

export const buttonVariants = styleVariants({
  primary: [baseButton, { backgroundColor: "blue", color: "white" }],
  secondary: [baseButton, { backgroundColor: "gray", color: "white" }],
  success: [baseButton, { backgroundColor: "green", color: "white" }],
  danger: [baseButton, { backgroundColor: "orange", color: "white" }],
  error: [baseButton, { backgroundColor: "red", color: "white" }],
});

export const buttonSizes = styleVariants({
  xs: { padding: "2px 4px", fontSize: "10px" },
  sm: { padding: "4px 8px", fontSize: "12px" },
  md: { padding: "8px 16px", fontSize: "16px" },
  lg: { padding: "12px 24px", fontSize: "20px" },
  xl: { padding: "16px 32px", fontSize: "24px" },
  xxl: { padding: "20px 40px", fontSize: "28px" },
});
