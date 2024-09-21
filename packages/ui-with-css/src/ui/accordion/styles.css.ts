import { createThemeContract, style, styleVariants } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  color: { brand: null },
  font: { body: null },
  size: { width: null, height: null },
});

export const baseAccordionWrapper = style({
  boxShadow: "0.25rem 0.25rem 1rem 0 rgba(4, 9, 26, 0.16)",
  background: themeVars.color.brand,
  fontFamily: themeVars.font.body,
  width: themeVars.size.width,
  height: themeVars.size.height,
});

export const baseItem = style({
  width: "100%",
  backgroundColor: "#fff",
  boxShadow: "0.25rem 0.25rem 1rem 0 rgba(4, 9, 26, 0.16)",
});

export const baseButtonWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 24px",
  // boxShadow: "0.25rem 0.25rem 1rem 0 rgba(4, 9, 26, 0.16)",
});

export const baseButton = style({
  display: "flex",
  gap: 8,
  border: "none",
  padding: "16px",
  backgroundColor: "transparent",
  cursor: "pointer",
  position: "relative",
  alignItems: "center",
  selectors: {
    "&:focus": {
      outline: "none",
    },
  },
});

export const basePanel = style({
  padding: "8px 24px",

  background: "red",
  selectors: {
    "&:focus": {
      outline: "none",
    },
  },
});

// Icons
export const baseIcon = style({
  transition: "transform 0.2s ease-in",
});

export const iconTransform = styleVariants({
  active: [baseIcon, { transform: "rotate(180deg)" }],
  inactive: [baseIcon, { transform: "rotate(0)" }],
});

// Panels
export const panelVariants = styleVariants({
  active: [basePanel, { display: "block" }],
  inactive: [basePanel, { display: "none" }],
});
export const basePanelInner = style({
  padding: "16px",
});
