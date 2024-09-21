import type { Color, ProviderProps, Themes } from "../types";
import { palette } from "../vars";

export type Theme = "light" | "dark";

interface ThemeProps {
  theme?: Theme;
  toggleTheme: () => void;

  lightTheme: CreateThemePrams;
  darkTheme: CreateThemePrams;
}

export interface ThemeContextProps extends ThemeProps {}

export interface ThemeProviderProps extends ProviderProps, ThemeProps {}

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

export type Palette<L extends string> = {
  [key in `${L}`]: Color;
};
export type PaletteKey = "05" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90";
