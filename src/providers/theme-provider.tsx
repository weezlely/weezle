import { type FC, createContext } from "react";

import { IThemeContext } from "interfaces/theme.interface";

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider: FC<IThemeContext> = ({ theme, children }) => {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
