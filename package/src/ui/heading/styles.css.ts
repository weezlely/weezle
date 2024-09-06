import { createThemeContract, style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "../../vars";
import { recipe } from "@vanilla-extract/recipes";

export const vars = createThemeContract({
  color: {
    bgColor: null,
    fontColor: null,
  },
  style: {
    underline: "underline",
  },
});

export const headingBase = style({
  margin: 0,
  padding: 0,
  fontWeight: 400,
  lineHeight: 1.5,

  backgroundColor: vars.color.bgColor,
  textDecoration: vars.style.underline,
  fontFamily: themeVars.font.body,

  selectors: {
    "&:focus": {
      color: themeVars.interactive.focusColor,
    },
    "&:hover": {
      color: themeVars.interactive.hoverColor,
    },
  },
});

export const headingAs = styleVariants({
  h1: [headingBase, { fontSize: "32px", fontWeight: 700 }],
  h2: [headingBase, { fontSize: "28px", fontWeight: 600 }],
  h3: [headingBase, { fontSize: "24px", fontWeight: 500 }],
  h4: [headingBase, { fontSize: "20px", fontWeight: 500 }],
  h5: [headingBase, { fontSize: "16px", fontWeight: 400 }],
  h6: [headingBase, { fontSize: "14px", fontWeight: 400 }],
});

export const headingFontStyle = recipe({
  base: {
    color: themeVars.color.heading,
  },
  variants: {
    customColor: {
      true: { color: vars.color.fontColor },
    },
  },
});
