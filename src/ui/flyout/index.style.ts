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

export const headerStyle: CSSProperties = {};

export const listStyle: CSSProperties = {
  position: "absolute",
  top: "8px",
  left: "0",
  zIndex: "99",
  height: "100%",
  transition: "opacity 0.35s ease-in-out",
};

export const itemStyle: CSSProperties = {
  height: "auto",
  fontSize: "14px",
  marginTop: "8px",
  marginBottom: "8px",
};
