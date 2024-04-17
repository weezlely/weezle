import { useContext } from "react";
import { ThemeContext } from "providers/theme-provider";

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("Error : useTheme must be used within a ThemeProvider");
  }
  return theme;
};

export default useTheme;
