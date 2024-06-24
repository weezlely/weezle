import { style, styleVariants } from "@vanilla-extract/css";

// Sidebar container 스타일
export const container = style({
  height: "100vh",
  backgroundColor: "#2c3e50",
  display: "flex",
  flexDirection: "column",
});

// Sidebar header 스타일
export const header = style({
  padding: "16px",
  backgroundColor: "#34495e",
  color: "#ecf0f1",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
});

// Sidebar body 스타일
export const body = style({
  flex: 1,
  overflowY: "auto",
  padding: "16px",
  color: "#ecf0f1",
});

// Sidebar list 스타일
export const list = style({
  listStyleType: "none",
  padding: 0,
  margin: 0,
});

// Sidebar item 스타일
export const item = style({
  padding: "12px 16px",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: "#3a536b",
    },
  },
});

// Sidebar toggle 버튼 스타일
export const toggle = style({
  padding: "8px 16px",
  cursor: "pointer",
  backgroundColor: "#34495e",
  color: "#ecf0f1",
  border: "none",
  textAlign: "center",
  selectors: {
    "&:hover": {
      backgroundColor: "#3a536b",
    },
  },
});

// Sidebar divider 스타일
export const divider = style({
  height: "1px",
  backgroundColor: "#7f8c8d",
  margin: "16px 0",
});
