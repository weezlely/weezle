import { styleVariants, style } from "@vanilla-extract/css";

/**
 * =================================================================
 *                              Style
 * =================================================================
 */

export const baseSpacing = style({});

export const spacing = styleVariants({
  none: { margin: 0, padding: 0 },
  xs: { margin: "2px", padding: "2px" },
  sm: { margin: "4px", padding: "4px" },
  md: { margin: "8px", padding: "8px" },
  lg: { margin: "16px", padding: "16px" },
  xl: { margin: "32px", padding: "32px" },
});
