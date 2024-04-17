import { PropsWithChildren } from "react";
import { Theme } from "types/theme.type";

export interface IThemeContext extends PropsWithChildren {
  theme: Theme;
}
