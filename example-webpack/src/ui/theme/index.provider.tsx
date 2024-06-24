import ThemeContext from "./context";
import { ThemeProviderProps } from "./index.type";

export interface IThemeProvider extends ThemeProviderProps {}
const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
