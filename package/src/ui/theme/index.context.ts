import { createContext } from "react";
import { ThemeContextProps } from "./index.type";

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
export default ThemeContext;
