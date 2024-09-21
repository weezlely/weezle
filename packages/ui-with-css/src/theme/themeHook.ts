import { useContext } from "react";
import { ThemeContext } from ".";

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("🚨 Theme must be used within a Theme's provider 🚨");
  }
  return theme;
};
