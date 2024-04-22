import { PropsWithChildren } from "react";
import { Theme } from "types";

export interface IThemeContext extends PropsWithChildren {
  theme: Theme;
}
