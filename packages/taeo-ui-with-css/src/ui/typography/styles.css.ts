import { createThemeContract, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "../../vars";

export const vars = createThemeContract({
  color: {
    bgColor: null,
    fontColor: null,
    // borderColor: null,
  },
  style: {
    underline: "underline",
  },
});

export const typography = style({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  lineHeight: 1.5,

  fontFamily: themeVars.font.body,
  textDecoration: vars.style.underline,

  selectors: {
    "&:focus": {
      color: themeVars.interactive.focusColor,
    },
    "&:hover": {
      color: themeVars.interactive.hoverColor,
    },
  },
});

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

export const typographyFontStyle = recipe({
  base: {
    color: themeVars.color.heading,
  },
  variants: {
    customColor: {
      true: { color: vars.color.fontColor },
    },
  },
});
