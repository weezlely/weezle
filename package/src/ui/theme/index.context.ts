import * as React from "react";

import { ThemeContextProps } from "./index.type";

const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);
export default ThemeContext;
