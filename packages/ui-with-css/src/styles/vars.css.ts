import { createThemeContract } from "@vanilla-extract/css";

const colorThemeVar = { brand: null, background: null, border: null, text: null };

const fontThemeVar = { body: null, heading: null, monospace: null };

const sizeThemeVar = { width: null, height: null, padding: null, margin: null };

const borderRadiusThemeVar = { small: null, medium: null, large: null };

const zIndexThemeVar = { dropdown: null, modal: null, tooltip: null };

export const vars = createThemeContract({
  color: colorThemeVar,
  font: fontThemeVar,
  size: sizeThemeVar,
  borderRadius: borderRadiusThemeVar,
  zIndex: zIndexThemeVar,
});
