import { style } from "@vanilla-extract/css";
import { themeVars } from "../../vars";

export const box = style({
  borderRadius: "4px", // 기본 radius
  cursor: "pointer",
  padding: "1.25rem",
  fontFamily: themeVars.font.body,
  boxShadow: themeVars.shadow.emphasis,

  width: "100%",
  height: "100%",

  background: themeVars.color.background,
  backdropFilter: "blur(1.875rem)",
});
