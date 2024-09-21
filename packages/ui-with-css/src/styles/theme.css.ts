import { createThemeContract, createTheme, globalStyle, style } from "@vanilla-extract/css";

// 1. 테마 계약 정의
export const vars = createThemeContract({
  color: { brand: null, background: null, text: null },
  font: { body: null, heading: null },
});

// 2. 테마 생성
export const lightTheme = createTheme(vars, {
  color: { brand: "blue", background: "white", text: "black" },
  font: { body: "Arial, sans-serif", heading: "Georgia, serif" },
});

export const darkTheme = createTheme(vars, {
  color: { brand: "darkblue", background: "#333", text: "white" },
  font: { body: "Arial, sans-serif", heading: "Georgia, serif" },
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.body,
  backgroundColor: vars.color.background,
  color: vars.color.text,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: vars.font.heading,
});
