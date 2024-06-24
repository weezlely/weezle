// index.css.ts
import { style, styleVariants } from "@vanilla-extract/css";

export const headingBase = style({
  margin: 0,
  padding: 0,
  fontFamily: "'Arial', sans-serif",
  fontWeight: 400,
  lineHeight: 1.5,
});

export const headingAs = styleVariants({
  h1: [headingBase, { fontSize: "32px", fontWeight: 700 }],
  h2: [headingBase, { fontSize: "28px", fontWeight: 600 }],
  h3: [headingBase, { fontSize: "24px", fontWeight: 500 }],
  h4: [headingBase, { fontSize: "20px", fontWeight: 500 }],
  h5: [headingBase, { fontSize: "16px", fontWeight: 400 }],
  h6: [headingBase, { fontSize: "14px", fontWeight: 400 }],
});

export const variable = style({
  vars: {
    "--color": "inherit",
    "--background-color": "transparent",
  },
  color: "var(--color)",
  backgroundColor: "var(--background-color)",
});
