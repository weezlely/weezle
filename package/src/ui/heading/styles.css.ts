import { createVar, style, styleVariants } from "@vanilla-extract/css";

/**
 * =================================================================
 *                              Var
 * =================================================================
 */
const colorVar = createVar();
const backgroundColorVar = createVar();

/**
 * =================================================================
 *                              Style
 * =================================================================
 */

export const headingBase = style({
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
export const headingAs = styleVariants({
  h1: [headingBase, { fontSize: "32px", fontWeight: 700 }],
  h2: [headingBase, { fontSize: "28px", fontWeight: 600 }],
  h3: [headingBase, { fontSize: "24px", fontWeight: 500 }],
  h4: [headingBase, { fontSize: "20px", fontWeight: 500 }],
  h5: [headingBase, { fontSize: "16px", fontWeight: 400 }],
  h6: [headingBase, { fontSize: "14px", fontWeight: 400 }],
});

export const dynamicVars = {
  color: colorVar,
  backgroundColor: backgroundColorVar,
};

export const variable = style({
  vars: {
    [colorVar]: "inherit",
    [backgroundColorVar]: "transparent",
  },
  color: colorVar,
  backgroundColor: backgroundColorVar,
});
