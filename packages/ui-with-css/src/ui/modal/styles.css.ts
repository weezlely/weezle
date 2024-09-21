import { style, styleVariants } from "@vanilla-extract/css";

const colors = {
  background: "#fff",
  dimmed: "rgba(0, 0, 0, 0.5)",
  primary: "#0070f3",
  secondary: "#333",
  borderColor: "#eaeaea",
};

const spacing = {
  small: "8px",
  medium: "16px",
  large: "24px",
  xlarge: "32px",
};

const zIndex = {
  modal: 1000,
  overlay: 999,
};

/**
 * =================================================================
 *                              Style
 * =================================================================
 */

export const layout = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: colors.background,
  zIndex: zIndex.modal,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  overflow: "hidden",
  width: "80%",
  maxWidth: "500px",
  maxHeight: "80%",
  display: "flex",
  flexDirection: "column",
});

export const dimmed = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: colors.dimmed,
  zIndex: zIndex.overlay,
});

export const header = style({
  padding: spacing.medium,
  borderBottom: `1px solid ${colors.borderColor}`,
  backgroundColor: colors.primary,
  color: colors.background,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const body = style({
  padding: spacing.medium,
  overflowY: "auto",
  flexGrow: 1,
});

export const footer = style({
  padding: spacing.medium,
  borderTop: `1px solid ${colors.borderColor}`,
  display: "flex",
  justifyContent: "flex-end",
  gap: spacing.small,
});

export const trigger = style({
  padding: spacing.small,
  backgroundColor: colors.primary,
  color: colors.background,
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: colors.secondary,
  },
});
