import { createThemeContract, style, styleVariants } from "@vanilla-extract/css";

export const vars = createThemeContract({
  style: {
    gap: null,
  },
});

export const flexBase = style({
  display: "flex",
  flex: 1,
  gap: vars.style.gap,
});

export const flexDirection = styleVariants({
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
});

export const align = styleVariants({
  "flex-start": { alignItems: "flex-start" },
  "flex-end": { alignItems: "flex-end" },
  center: { alignItems: "center" },
  baseline: { alignItems: "baseline" },
  stretch: { alignItems: "stretch" },
});

export const justify = styleVariants({
  "flex-start": { justifyContent: "flex-start" },
  "flex-end": { justifyContent: "flex-end" },
  center: { justifyContent: "center" },
  "space-between": { justifyContent: "space-between" },
  "space-around": { justifyContent: "space-around" },
  "space-evenly": { justifyContent: "space-evenly" },
});
