import type { ProviderProps, Themes } from "../types";
import { palette } from "../vars";

interface ContextProps {
  theme?: Themes;
  isDarkMode?: boolean;
  toggleTheme: () => void;
}

export interface ThemeContextProps extends ContextProps {}

export interface ThemeProviderProps extends ProviderProps, ContextProps {}

export type CreateThemePrams =
  | typeof palette.aqua
  | typeof palette.black
  | typeof palette.blue
  | typeof palette.blueViolet
  | typeof palette.brown
  | typeof palette.charcoal
  | typeof palette.coral
  | typeof palette.darkRed
  | typeof palette.fuchsia
  | typeof palette.gold
  | typeof palette.gray
  | typeof palette.green
  | typeof palette.hotPink
  | typeof palette.lime
  | typeof palette.limeGreen
  | typeof palette.navy
  | typeof palette.olive
  | typeof palette.orange
  | typeof palette.pink
  | typeof palette.purple
  | typeof palette.red
  | typeof palette.royalBlue
  | typeof palette.saddleBrown
  | typeof palette.salmon
  | typeof palette.skyBlue
  | typeof palette.teal
  | typeof palette.yellow;
