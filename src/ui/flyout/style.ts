import type { CSSProperties } from "react";

export const containerStyle: CSSProperties = {
  position: "relative",
  width: "auto",
  height: "auto",
};
export const overlayStyle: CSSProperties = {
  position: "fixed",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  zIndex: "9",
};

export const toggleStyle: CSSProperties = {
  width: "auto",
};

export const headerStyle: CSSProperties = {
  fontSize: "18px",
  fontWeight: 500,
  padding: "4px",
  borderBottom: "1px groove rgba(0, 0, 0, 0.1)",
};

export const listStyle: CSSProperties = {
  position: "relative",
  top: "8px",
  left: "0",
  zIndex: "99",
  height: "100%",
  transition: "opacity 0.35s ease-in-out",
  padding: "8px",
  boxSizing: "border-box",
  backgroundColor: "#fff",
  borderBottom: "1px groove rgba(0, 0, 0, 0.1)",
  borderRight: "1px groove rgba(0, 0, 0, 0.1)",
};

export const itemStyle: CSSProperties = {
  height: "auto",
  fontSize: "14px",
  marginTop: "8px",
  marginBottom: "8px",
};
