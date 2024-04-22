import type { CSSProperties } from "react";
import { colors } from "../../..";

export const containerStyle: CSSProperties = {
  position: "relative",
  cursor: "pointer",
  width: "60px",
  height: "30px",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "4px",
  paddingBottom: "4px",
};

export const toggleStyle: CSSProperties = {
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.white,
};

export const titleStyle: CSSProperties = {};
