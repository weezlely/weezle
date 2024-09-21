import * as React from "react";

import type { Theme, ThemeContextProps, ThemeProviderProps } from "./theme.type";
import { createLightAndDarkThemes } from "./themeRepository";
import { palette } from "../vars";

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme() {},
  lightTheme: palette.navy,
  darkTheme: palette.blue,
});

export const ThemeProvider = ({ theme, lightTheme, darkTheme, children }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = React.useState<Theme>(() => theme || "light");

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeGuide = createLightAndDarkThemes(lightTheme, darkTheme);
  const themeClass = themeMode === "light" ? themeGuide.light : themeGuide.dark;

  return (
    <ThemeContext.Provider value={{ theme: themeMode, lightTheme, darkTheme, toggleTheme }}>
      <div className={themeClass}>{children}</div>
    </ThemeContext.Provider>
  );
};
