import * as React from "react";

import type { ThemeContextProps, ThemeProviderProps } from "./theme.type";

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: undefined,
  isDarkMode: false,
  toggleTheme() {},
});

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};
