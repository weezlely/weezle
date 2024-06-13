import { style } from "@vanilla-extract/css";
import { colors } from "../../styles";

export const container = style({
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
});

export const toggle = style({
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.white,
});

export const title = style({});
